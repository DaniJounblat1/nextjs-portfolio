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
            <div>
                <p>Made with ❤️ and +60 ☕ in 2024</p>
                <a href="./cv.pdf" download className="cv">
                    Download CV <i className="fa-solid fa-download"></i>
                </a>
                <div className="social-links">
                    <span> my </span>
                    <a
                        href="https://github.com/danijounblat1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <span> and my </span>
                    <a
                        href="https://www.linkedin.com/in/dani-jounblat-b80075301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
        </footer>
    );
};

export default Footer;
