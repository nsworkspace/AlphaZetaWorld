import { useEffect, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, MessageSquareText, Package } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const Dashboard = () => {
    const [counts, setCounts] = useState({ products: 0, services: 0, contacts: 0 });

    useEffect(() => {
        Promise.all([
            api.get("/products?status=all&page=1&limit=1"),
            api.get("/services?status=all&page=1&limit=1"),
            api.get("/contacts?page=1&limit=1"),
        ]).then(([products, services, contacts]) => setCounts({
            products: products.data.pagination?.total || 0,
            services: services.data.pagination?.total || 0,
            contacts: contacts.data.pagination?.total || 0,
        })).catch(() => {});
    }, []);

    const sections = [
        { title: "Products", description: "Catalog items and pricing", count: counts.products, to: "/products", icon: Package },
        { title: "Services", description: "Service descriptions and status", count: counts.services, to: "/services", icon: BriefcaseBusiness },
        { title: "Contacts", description: "Website enquiries and requests", count: counts.contacts, to: "/contacts", icon: MessageSquareText },
    ];

    return (
        <section className="page-section">
            <div className="page-heading"><div><p className="eyebrow">Workspace</p><h1>Dashboard</h1><p className="page-subtitle">Your catalog and customer enquiries at a glance.</p></div></div>
            <div className="dashboard-links">{sections.map(({ title, description, count, to, icon: Icon }) => <Link className="dashboard-link" to={to} key={title}><span className="dashboard-icon"><Icon size={20} /></span><span className="dashboard-copy"><strong>{title}</strong><span>{description}</span></span><span className="dashboard-count">{count}</span><ArrowUpRight className="dashboard-arrow" size={18} /></Link>)}</div>
        </section>
    );
};

export default Dashboard;
