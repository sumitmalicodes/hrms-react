import { NavLink } from "react-router-dom";

import useAuth from "../../hooks/useAuth";


const Sidebar = () => {

    const { user } = useAuth();

    const role = user?.role;


    const isAdmin =
        role === "Super Admin" ||
        role === "HR Admin";


    const isManager =
        role === "Manager";


    return (
        <>

            {/* Desktop Sidebar */}
            <aside
                className="d-none d-lg-flex flex-column bg-dark text-white"
                style={{
                    width: "250px",
                    minHeight: "100vh"
                }}
            >

                {/* Logo */}
                <div className="p-4 border-bottom border-secondary">

                    <h4 className="mb-0 fw-bold">
                        HRMS
                    </h4>

                    <small className="text-secondary">
                        Human Resource Management
                    </small>

                </div>


                {/* Menu */}
                <div className="p-3">

                    <SidebarMenu
                        isAdmin={isAdmin}
                        isManager={isManager}
                    />

                </div>

            </aside>


            {/* Mobile Sidebar */}
            <div
                className="offcanvas offcanvas-start bg-dark text-white"
                tabIndex="-1"
                id="sidebar"
            >

                <div className="offcanvas-header">

                    <h5 className="offcanvas-title">
                        HRMS
                    </h5>

                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                    />

                </div>


                <div className="offcanvas-body">

                    <SidebarMenu
                        isAdmin={isAdmin}
                        isManager={isManager}
                    />

                </div>

            </div>

        </>
    );
};


// -----------------------------------------
// Sidebar Menu
// -----------------------------------------
const SidebarMenu = ({
    isAdmin,
    isManager
}) => {

    return (
        <div className="nav flex-column gap-1">

            {/* Dashboard */}
            <NavLink
                to="/dashboard"
                className={getMenuClass}
            >
                🏠 Dashboard
            </NavLink>


            {/* Admin */}
            {isAdmin && (
                <>
                    <div className="text-secondary small mt-3 mb-1">
                        MASTER
                    </div>


                    <NavLink
                        to="/company"
                        className={getMenuClass}
                    >
                        🏢 Company
                    </NavLink>


                    <NavLink
                        to="/branch"
                        className={getMenuClass}
                    >
                        🏬 Branch
                    </NavLink>


                    <NavLink
                        to="/department"
                        className={getMenuClass}
                    >
                        🏷️ Department
                    </NavLink>


                    <NavLink
                        to="/designation"
                        className={getMenuClass}
                    >
                        💼 Designation
                    </NavLink>


                    <NavLink
                        to="/employee"
                        className={getMenuClass}
                    >
                        👥 Employees
                    </NavLink>


                    <div className="text-secondary small mt-3 mb-1">
                        HR
                    </div>


                    <NavLink
                        to="/attendance"
                        className={getMenuClass}
                    >
                        🕐 Attendance
                    </NavLink>


                    <NavLink
                        to="/leave"
                        className={getMenuClass}
                    >
                        📅 Leave
                    </NavLink>


                    <NavLink
                        to="/payroll"
                        className={getMenuClass}
                    >
                        💰 Payroll
                    </NavLink>


                    <NavLink
                        to="/reports"
                        className={getMenuClass}
                    >
                        📊 Reports
                    </NavLink>

                </>
            )}


            {/* Manager */}
            {isManager && (
                <>

                    <div className="text-secondary small mt-3 mb-1">
                        MANAGEMENT
                    </div>


                    <NavLink
                        to="/team"
                        className={getMenuClass}
                    >
                        👥 My Team
                    </NavLink>


                    <NavLink
                        to="/attendance"
                        className={getMenuClass}
                    >
                        🕐 Attendance
                    </NavLink>


                    <NavLink
                        to="/leave-approval"
                        className={getMenuClass}
                    >
                        ✅ Leave Approval
                    </NavLink>


                    <NavLink
                        to="/reports"
                        className={getMenuClass}
                    >
                        📊 Reports
                    </NavLink>

                </>
            )}


            {/* Employee */}
            {!isAdmin && !isManager && (
                <>

                    <div className="text-secondary small mt-3 mb-1">
                        EMPLOYEE
                    </div>


                    <NavLink
                        to="/profile"
                        className={getMenuClass}
                    >
                        👤 My Profile
                    </NavLink>


                    <NavLink
                        to="/my-attendance"
                        className={getMenuClass}
                    >
                        🕐 My Attendance
                    </NavLink>


                    <NavLink
                        to="/apply-leave"
                        className={getMenuClass}
                    >
                        📅 Apply Leave
                    </NavLink>


                    <NavLink
                        to="/my-payroll"
                        className={getMenuClass}
                    >
                        💰 My Payroll
                    </NavLink>


                    <NavLink
                        to="/my-reports"
                        className={getMenuClass}
                    >
                        📊 My Reports
                    </NavLink>

                </>
            )}

        </div>
    );
};


// -----------------------------------------
// Menu CSS
// -----------------------------------------
const getMenuClass = ({ isActive }) => {

    return `
        nav-link
        text-white
        rounded
        px-3
        py-2
        ${isActive ? "bg-primary" : ""}
    `;
};


export default Sidebar;