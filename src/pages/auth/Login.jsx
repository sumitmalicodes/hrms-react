import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";


const Login = () => {
    const navigate =
        useNavigate();

    const { login } =
        useAuth();


    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");


    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");


        if (!email.trim()) {

            setError(
                "Please enter email."
            );

            return;
        }


        if (!password.trim()) {

            setError(
                "Please enter password."
            );

            return;
        }


        setLoading(true);


        const result =
            await login(
                email,
                password
            );


        setLoading(false);


        if (result.success) {

            navigate(
                "/dashboard",
                {
                    replace: true
                }
            );

        } else {

            setError(
                result.message
            );
        }
    };


    return (

        <div className="container-fluid vh-100">

            <div className="row h-100">


                {/* LEFT */}

                <div className="
                    col-md-6
                    d-none
                    d-md-flex
                    bg-primary
                    text-white
                    justify-content-center
                    align-items-center
                ">

                    <div className="text-center">

                        <h1 className="fw-bold">
                            HRMS
                        </h1>

                        <p className="fs-5">
                            Human Resource
                            Management System
                        </p>

                        <p>
                            Manage Employees,
                            Attendance,
                            Leave and Payroll
                        </p>

                    </div>

                </div>


                {/* RIGHT */}

                <div className="
                    col-md-6
                    d-flex
                    justify-content-center
                    align-items-center
                ">

                    <div
                        className="
                            card
                            shadow
                            border-0
                        "
                        style={{
                            width: "400px"
                        }}
                    >

                        <div className="
                            card-body
                            p-4
                        ">


                            <div className="
                                text-center
                                mb-4
                            ">

                                <h3 className="fw-bold">
                                    Welcome Back
                                </h3>

                                <p className="text-muted">
                                    Login to your
                                    HRMS account
                                </p>

                            </div>


                            {error && (

                                <div
                                    className="
                                        alert
                                        alert-danger
                                    "
                                >
                                    {error}
                                </div>

                            )}


                            <form
                                onSubmit={
                                    handleSubmit
                                }
                            >


                                {/* EMAIL */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(
                                                e.target.value
                                            )
                                        }
                                        disabled={loading}
                                    />

                                </div>


                                {/* PASSWORD */}

                                <div className="mb-3">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(
                                                e.target.value
                                            )
                                        }
                                        disabled={loading}
                                    />

                                </div>


                                {/* LOGIN */}

                                <button
                                    type="submit"
                                    className="
                                        btn
                                        btn-primary
                                        w-100
                                    "
                                    disabled={loading}
                                >

                                    {loading ? (

                                        <>
                                            <span
                                                className="
                                                    spinner-border
                                                    spinner-border-sm
                                                    me-2
                                                "
                                            />

                                            Logging in...
                                        </>

                                    ) : (

                                        "Login"

                                    )}

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};


export default Login;