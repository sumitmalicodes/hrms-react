import {
    BrowserRouter,
    Navigate,
    Route,
    Routes
} from "react-router-dom";


import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Unauthorized from "../pages/Unauthorized";

import MainLayout from "../components/layout/MainLayout";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import RoleRoute from "./RoleRoute";


const AppRoutes = () => {
    return (

        <BrowserRouter>

            <Routes>


                {/* PUBLIC */}

                <Route
                    element={<PublicRoute />}
                >

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                </Route>


                {/* PROTECTED */}

                <Route
                    element={<ProtectedRoute />}
                >

                    <Route
                        element={<MainLayout />}
                    >

                        {/* DASHBOARD */}

                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />


                        {/* UNAUTHORIZED */}

                        <Route
                            path="/unauthorized"
                            element={<Unauthorized />}
                        />


                        {/* ADMIN */}

                        <Route
                            element={
                                <RoleRoute
                                    allowedRoles={[
                                        "Super Admin",
                                        "HR Admin"
                                    ]}
                                />
                            }
                        >

                            <Route
                                path="/company"
                                element={
                                    <div>
                                        Company Page
                                    </div>
                                }
                            />

                            <Route
                                path="/branch"
                                element={
                                    <div>
                                        Branch Page
                                    </div>
                                }
                            />

                            <Route
                                path="/department"
                                element={
                                    <div>
                                        Department Page
                                    </div>
                                }
                            />

                            <Route
                                path="/designation"
                                element={
                                    <div>
                                        Designation Page
                                    </div>
                                }
                            />

                            <Route
                                path="/employee"
                                element={
                                    <div>
                                        Employee Page
                                    </div>
                                }
                            />

                        </Route>


                        {/* HR */}

                        <Route
                            element={
                                <RoleRoute
                                    allowedRoles={[
                                        "Super Admin",
                                        "HR Admin",
                                        "Manager"
                                    ]}
                                />
                            }
                        >

                            <Route
                                path="/attendance"
                                element={
                                    <div>
                                        Attendance Page
                                    </div>
                                }
                            />

                            <Route
                                path="/leave"
                                element={
                                    <div>
                                        Leave Page
                                    </div>
                                }
                            />

                            <Route
                                path="/reports"
                                element={
                                    <div>
                                        Reports Page
                                    </div>
                                }
                            />

                        </Route>


                        {/* PAYROLL */}

                        <Route
                            element={
                                <RoleRoute
                                    allowedRoles={[
                                        "Super Admin",
                                        "HR Admin"
                                    ]}
                                />
                            }
                        >

                            <Route
                                path="/payroll"
                                element={
                                    <div>
                                        Payroll Page
                                    </div>
                                }
                            />

                        </Route>


                        {/* PROFILE */}

                        <Route
                            element={
                                <RoleRoute
                                    allowedRoles={[
                                        "Super Admin",
                                        "HR Admin",
                                        "Manager",
                                        "Employee"
                                    ]}
                                />
                            }
                        >

                            <Route
                                path="/profile"
                                element={
                                    <div>
                                        My Profile
                                    </div>
                                }
                            />

                        </Route>

                    </Route>

                </Route>


                {/* DEFAULT */}

                <Route
                    path="/"
                    element={
                        <Navigate
                            to="/login"
                            replace
                        />
                    }
                />


                {/* PAGE NOT FOUND */}

                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/login"
                            replace
                        />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
};


export default AppRoutes;