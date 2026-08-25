import { Link } from "react-router-dom";


const Unauthorized = () => {

    return (
        <div className="container-fluid">

            <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "70vh" }}
            >

                <div className="text-center">

                    <div
                        className="display-1 fw-bold text-danger"
                    >
                        403
                    </div>

                    <h2 className="mb-3">
                        Access Denied
                    </h2>

                    <p className="text-muted mb-4">
                        You do not have permission to access
                        this page.
                    </p>

                    <Link
                        to="/dashboard"
                        className="btn btn-primary"
                    >
                        Back to Dashboard
                    </Link>

                </div>

            </div>

        </div>
    );
};


export default Unauthorized;