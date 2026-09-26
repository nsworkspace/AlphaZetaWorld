import { useState } from "react";
import { AuthContext } from "./auth-context";

export const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("admin_user") || "null");
        } catch {
            return null;
        }
    });
    const [token, setToken] = useState(
        localStorage.getItem("admin_token")
    );

    const login = (adminData, jwtToken) => {
        localStorage.setItem("admin_token", jwtToken);
        localStorage.setItem("admin_user", JSON.stringify(adminData));

        setAdmin(adminData);
        setToken(jwtToken);
    };

    const logout = () => {
        localStorage.removeItem("admin_token");
        localStorage.removeItem("admin_user");

        setAdmin(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                admin,
                token,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
