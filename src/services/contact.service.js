const Contact = require("../models/contact");

const firstDefined = (data, keys) => {
    for (const key of keys) {
        if (data[key] !== undefined) return data[key];
    }
    return undefined;
};

const normalizeServices = (value) => {
    if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
    if (typeof value === "string") return value.split(",").map((item) => item.trim()).filter(Boolean);
    return value;
};

const normalizeContact = (data = {}) => ({
    fullName: firstDefined(data, ["fullName", "full_name", "name"]),
    email: data.email,
    contactNumber: firstDefined(data, ["contactNumber", "contact_number", "contact", "phone"]),
    services: normalizeServices(firstDefined(data, ["services", "service"])),
    description: firstDefined(data, ["description", "message"]) ?? ""
});

const toContactDto = (contact) => {
    const record = typeof contact.toObject === "function" ? contact.toObject() : contact;
    const services = normalizeServices(firstDefined(record, ["services", "subject"])) || [];
    return {
        id: String(record._id || record.id),
        fullName: firstDefined(record, ["fullName", "full_name", "name"]) || "",
        email: record.email || "",
        contactNumber: firstDefined(record, ["contactNumber", "contact_number", "phone"]) || "",
        services,
        description: firstDefined(record, ["description", "message"]) || "",
        status: record.status === "success" ? "success" : "pending",
        createdAt: record.createdAt,
        updatedAt: record.updatedAt
    };
};

const createContact = async (data) => toContactDto(await Contact.create(normalizeContact(data)));

const listContacts = async ({ page, limit, status, search }) => {
    page = Math.max(1, Number.parseInt(page, 10) || 1);
    limit = Math.min(100, Math.max(1, Number.parseInt(limit, 10) || 20));
    const filters = [];
    if (status === "pending") {
        filters.push({ $or: [{ status: "pending" }, { status: "new" }, { status: { $exists: false } }] });
    } else if (status === "success") {
        filters.push({ status: "success" });
    }
    if (search) {
        const pattern = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
        filters.push({ $or: [
            { fullName: pattern },
            { name: pattern },
            { email: pattern },
            { contactNumber: pattern },
            { contact_number: pattern },
            { phone: pattern }
        ] });
    }
    const filter = filters.length ? { $and: filters } : {};

    const [records, total] = await Promise.all([
        Contact.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
        Contact.countDocuments(filter)
    ]);

    return { items: records.map(toContactDto), total, page, limit, totalPages: Math.ceil(total / limit) };
};

const updateContactStatus = async (id, status) => {
    if (!["pending", "success"].includes(status)) {
        const error = new Error("Status must be pending or success");
        error.status = 400;
        throw error;
    }
    const contact = await Contact.findByIdAndUpdate(id, { status }, { returnDocument: "after", runValidators: true });
    return contact ? toContactDto(contact) : null;
};

module.exports = { createContact, listContacts, updateContactStatus };
