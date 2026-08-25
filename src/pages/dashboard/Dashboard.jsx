import useAuth from "../../hooks/useAuth";

const Dashboard = () => {

    const { user } = useAuth();


    return (
        <div className="container-fluid">

            <div className="row mb-4">

                <div className="col">

                    <h2 className="fw-bold">
                        Dashboard
                    </h2>

                    <p className="text-muted">
                        Welcome back, {user?.employeeName}
                    </p>

                </div>

            </div>


            <div className="row g-4">

                {/* Employees */}
                <div className="col-md-3">

                    <div className="card shadow-sm border-0">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Employees
                            </h6>

                            <h2 className="fw-bold">
                                0
                            </h2>

                        </div>

                    </div>

                </div>


                {/* Attendance */}
                <div className="col-md-3">

                    <div className="card shadow-sm border-0">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Attendance
                            </h6>

                            <h2 className="fw-bold">
                                0
                            </h2>

                        </div>

                    </div>

                </div>


                {/* Leave */}
                <div className="col-md-3">

                    <div className="card shadow-sm border-0">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Leave
                            </h6>

                            <h2 className="fw-bold">
                                0
                            </h2>

                        </div>

                    </div>

                </div>


                {/* Payroll */}
                <div className="col-md-3">

                    <div className="card shadow-sm border-0">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Payroll
                            </h6>

                            <h2 className="fw-bold">
                                0
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;