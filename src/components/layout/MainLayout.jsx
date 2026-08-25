import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


const MainLayout = () => {

    return (
        <div className="d-flex min-vh-100 bg-light">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Area */}
            <div className="flex-grow-1 d-flex flex-column">

                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <main className="flex-grow-1 p-4">

                    <Outlet />

                </main>

                {/* Footer */}
                <Footer />

            </div>

        </div>
    );
};


export default MainLayout;