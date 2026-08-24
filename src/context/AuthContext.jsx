import { useState } from "react";
import { jwtDecode } from "jwt-decode";

import {
    login as loginService,
    logout as logoutService
} from "../services/authService";

import AuthContext from "./AuthContextValue";


const getInitialAuth = () => {

    const storedToken = localStorage.getItem("token");

    if (!storedToken) {

        return {
            token: null,
            user: null
        };
    }


    try {

        const decodedToken = jwtDecode(storedToken);


        if (
            !decodedToken.exp ||
            decodedToken.exp * 1000 <= Date.now()
        ) {

            logoutService();

            return {
                token: null,
                user: null
            };
        }


        const user = {
            employeeId: decodedToken.EmployeeId,
            employeeName: decodedToken.EmployeeName,
            email: decodedToken.email,
            role: decodedToken.role,
            expiry: decodedToken.exp
        };


        return {
            token: storedToken,
            user
        };

    } catch (error) {

        console.error("Invalid token:", error);

        logoutService();

        return {
            token: null,
            user: null
        };
    }
};


export const AuthProvider = ({ children }) => {

    const initialAuth = getInitialAuth();


    const [token, setToken] = useState(
        initialAuth.token
    );


    const [user, setUser] = useState(
        initialAuth.user
    );


    const login = async (email, password) => {

        try {

            const response = await loginService({
                email,
                password
            });


            if (!response.isSuccess) {

                return {
                    success: false,
                    message:
                        response.message ||
                        "Login failed"
                };
            }


            const newToken = response.token;

            const decodedToken =
                jwtDecode(newToken);


            const newUser = {

                employeeId:
                    decodedToken.EmployeeId,

                employeeName:
                    decodedToken.EmployeeName,

                email:
                    decodedToken.email,

                role:
                    decodedToken.role,

                expiry:
                    decodedToken.exp
            };


            setToken(newToken);

            setUser(newUser);


            return {
                success: true,
                message: response.message
            };

        } catch (error) {

            console.error(
                "Login error:",
                error
            );


            return {
                success: false,
                message:
                    error.response?.data?.message ||
                    error.message ||
                    "Unable to login"
            };
        }
    };


    const logout = () => {

        logoutService();

        setToken(null);

        setUser(null);
    };


    const isAuthenticated =
        !!token && !!user;


    const contextValue = {

        user,
        token,

        // No useEffect loading required
        loading: false,

        isAuthenticated,

        login,

        logout
    };


    return (
        <AuthContext.Provider
            value={contextValue}
        >
            {children}
        </AuthContext.Provider>
    );
};