import {
    LayoutDashboard,
    Package,
    Briefcase,
    MessageSquare
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar">

            <div className="sidebar-logo">
                Admin Panel
            </div>

            <nav>

                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
                    <LayoutDashboard size={20} />
                    Dashboard
                </NavLink>

                <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>
                    <Package size={20} />
                    Products
                </NavLink>

                <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
                    <Briefcase size={20} />
                    Services
                </NavLink>

                <NavLink to="/contacts" className={({ isActive }) => isActive ? "active" : ""}>
                    <MessageSquare size={20} />
                    Contacts
                </NavLink>

            </nav>

        </aside>
    );
};

export default Sidebar;
