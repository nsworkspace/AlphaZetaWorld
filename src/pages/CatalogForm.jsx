import { useEffect, useState } from "react";
import { ArrowLeft, ImagePlus, Save, X } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import { resolveImageUrl } from "../utils/imageUrl";

const definitions = {
    products: { singular: "Product", collection: "products" },
    services: { singular: "Service", collection: "services" },
};

const emptyForm = { name: "", description: "", image: "", status: "active" };

const CatalogForm = ({ type }) => {
    const definition = definitions[type];
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);
    const [form, setForm] = useState(emptyForm);
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(isEditing);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) return;
        let active = true;
        api.get(`/${definition.collection}/${id}?status=all`).then(({ data }) => {
            if (active) setForm({ ...emptyForm, ...data.data });
        }).catch((requestError) => {
            if (active) setError(requestError.response?.data?.message || `Could not load this ${definition.singular.toLowerCase()}.`);
        }).finally(() => { if (active) setLoading(false); });
        return () => { active = false; };
    }, [definition.collection, definition.singular, id]);

    useEffect(() => () => {
        if (preview.startsWith("blob:")) URL.revokeObjectURL(preview);
    }, [preview]);

    const updateField = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

    const chooseImage = (event) => {
        const file = event.target.files?.[0];
        event.target.value = "";
        if (!file) return;
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const removeImage = () => {
        setSelectedFile(null);
        setPreview("");
        setForm((current) => ({ ...current, image: "" }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSaving(true);
        setError("");
        try {
            let image = form.image || "";
            if (selectedFile) {
                const upload = new FormData();
                upload.append("image", selectedFile);
                const uploaded = await api.post("/uploads/catalog", upload);
                image = uploaded.data.data.image;
            }

            const payload = { name: form.name.trim(), description: form.description.trim(), image };
            if (isEditing) payload.status = form.status;
            if (isEditing) await api.patch(`/${definition.collection}/${id}`, payload);
            else await api.post(`/${definition.collection}`, payload);
            navigate(`/${definition.collection}`);
        } catch (requestError) {
            setError(requestError.response?.data?.message || `Could not save this ${definition.singular.toLowerCase()}.`);
        } finally {
            setSaving(false);
        }
    };

    const imagePreview = preview || resolveImageUrl(form.image);

    return (
        <section className="page-section form-page">
            <Link className="back-link" to={`/${definition.collection}`}><ArrowLeft size={17} /> Back to {definition.collection}</Link>
            <div className="page-heading form-heading"><div><p className="eyebrow">{definition.singular} catalog</p><h1>{isEditing ? `Edit ${definition.singular}` : `Add ${definition.singular}`}</h1><p className="page-subtitle">Add clear details and a product image for your catalog.</p></div></div>
            {error && <div className="notice notice-error" role="alert">{error}</div>}
            {loading ? <div className="table-state">Loading {definition.singular.toLowerCase()}…</div> : <form className="editor-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                    <label className="field field-wide">Name <span className="required-mark">*</span><input name="name" value={form.name} onChange={updateField} required maxLength={120} autoFocus /></label>
                    <label className="field field-wide">Description<textarea name="description" value={form.description || ""} onChange={updateField} rows={5} maxLength={5000} /></label>
                    <div className="field field-wide"><span>Image</span><label className="upload-control"><ImagePlus size={20} /><span>{selectedFile ? selectedFile.name : "Choose an image"}</span><span className="upload-hint">JPEG, PNG, WebP or AVIF · up to 5 MB</span><input type="file" accept="image/jpeg,image/png,image/webp,image/avif" onChange={chooseImage} /></label>
                        {imagePreview && <div className="image-preview"><img src={imagePreview} alt="Selected catalog item" /><button className="icon-button danger-action" type="button" onClick={removeImage} aria-label="Remove image" title="Remove image"><X size={17} /></button></div>}
                    </div>
                    {isEditing && <label className="field">Status<select name="status" value={form.status} onChange={updateField}><option value="active">Active</option><option value="inactive">Inactive</option></select></label>}
                </div>
                <div className="form-actions"><Link className="button button-secondary" to={`/${definition.collection}`}>Cancel</Link><button className="button button-primary" type="submit" disabled={saving}><Save size={17} />{saving ? "Saving…" : isEditing ? "Save changes" : `Add ${definition.singular}`}</button></div>
            </form>}
        </section>
    );
};

export default CatalogForm;
