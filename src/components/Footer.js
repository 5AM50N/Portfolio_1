import React from "react";

function Footer() {
    return(
        <footer>
            <div className="footer-title">
            <span className="logo">Addy</span>
            <span>back to top</span></div>
            <hr></hr>
            <div className="container">
                
                <div className="links">
                    {/* <!-- 3 links 1.email, 2.linkedin 3.git --> */}
                    <a href="mailto:mr.adityaskamble@gmail.com">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-kamble-89354b208" target="_blank" className="linkedin">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="tel:7972911583">
                        <i class="fa-solid fa-phone"></i>
                    </a>
                </div>
            </div>
            <hr></hr>
        </footer>
    )
}

export default Footer;