const Footer = () => {

    return (
        <footer className="bg-white border-top py-3">

            <div className="container-fluid">

                <div className="text-center text-muted">

                    © {new Date().getFullYear()} HRMS.
                    All Rights Reserved.

                </div>

            </div>

        </footer>
    );
};


export default Footer;