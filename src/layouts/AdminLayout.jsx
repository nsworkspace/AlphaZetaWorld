import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <Sidebar />

            <div className="admin-content">
                <Header />

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;