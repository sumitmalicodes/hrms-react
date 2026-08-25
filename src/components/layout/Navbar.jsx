import useAuth from "../../hooks/useAuth";


const Navbar = () => {

    const {
        user,
        logout
    } = useAuth();


    const handleLogout = () => {

        logout();
    };


    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">

            <div className="container-fluid">

                {/* Mobile menu button */}
                <button
                    className="btn btn-outline-primary d-lg-none me-3"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#sidebar"
                >
                    ☰
                </button>


                {/* Page Title */}
                <span className="navbar-brand fw-bold">
                    HRMS
                </span>


                <div className="ms-auto d-flex align-items-center">

                    {/* User */}
                    <div className="dropdown">

                        <button
                            className="btn btn-light dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                        >

                            <span className="me-2">
                                👤
                            </span>

                            {user?.employeeName || "User"}

                        </button>


                        <ul className="dropdown-menu dropdown-menu-end">

                            <li>

                                <span className="dropdown-item-text">

                                    <strong>
                                        {user?.employeeName}
                                    </strong>

                                    <br />

                                    <small className="text-muted">
                                        {user?.role}
                                    </small>

                                </span>

                            </li>


                            <li>
                                <hr className="dropdown-divider" />
                            </li>


                            <li>

                                <button
                                    className="dropdown-item text-danger"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>

                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </nav>
    );
};


export default Navbar;