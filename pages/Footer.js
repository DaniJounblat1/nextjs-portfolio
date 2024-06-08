// components/Footer.js
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const router = useRouter();
    const isHomePage = router.pathname === "/";

    return (
        <footer
            className={`footer ${isHomePage ? "home-footer" : ""}`}
            id="myFooter"
        >
            {" "}
            <div>
                <p>As they said </p>
                <p>Made with ❤️ and +60 ☕ in 2024</p>
                <div className="social-links">
                   <span> my </span> <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <span> and my </span>
                    <a
                        href="https://www.linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
                <p className="footer-title">
                    Copyrights @ <span>Dani Jounblat</span>
                </p>
            </div>
            {
                // <style jsx>{`
                //                 .home-footer {
                //                     top: 150%;
                //                 }
                //             `}</style>
            }
        </footer>
    );
};

export default Footer;
