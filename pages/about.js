// pages/about.js
import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDownload,
    faDatabase,
    faCode,
    faTerminal
} from "@fortawesome/free-solid-svg-icons";
import {
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faPhp,
    faGit,
    faGithub,
    faNpm,
    faAndroid
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    const router = useRouter();

    const zoomOut = e => {
        e.preventDefault();
        router.push("/");
    };

    return (
        <section className="earthSection">
            <p onClick={zoomOut} className="closeButton">
                &times;
            </p>

            <div className="imgDiv">
                <img
                    src="/img/earth.gif"
                    alt="Earth"
                    className="earthImg planetsImg"
                />
            </div>

            <div className="clouds">
                <img src="/img/cloud1.png" alt="" className="cloud cloud1" />
                <img src="/img/cloud2.png" alt="" className="cloud cloud2" />
                <img src="/img/cloud3.png" alt="" className="cloud cloud3" />
            </div>

            <p className="mainTitle">About Me</p>

            <p>
                Dani Jounblat <span>From Lebanon</span>
            </p>
            <a href="./Danijounblat.pdf" download className="cv">
                Download CV <FontAwesomeIcon icon={faDownload} />
            </a>
            <p className="paragraph">
                MIS graduate with a passion for web development Front-end &
                Back-end.
            </p>
            <p className="pTitle">Skills :</p>
            <div className="skillsContainer">
                <div className="column">
                    <p>
                        <FontAwesomeIcon
                            icon={faHtml5}
                            className="fa-download"
                        />{" "}
                        HTML
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={faCss3Alt}
                            className="fa-download"
                        />{" "}
                        CSS
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={faJsSquare}
                            className="fa-download"
                        />{" "}
                        JS
                    </p>
                </div>
                <div className="column">
                    <p>
                        <FontAwesomeIcon icon={faPhp} className="fa-download" />{" "}
                        PHP
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={faDatabase}
                            className="fa-download"
                        />{" "}
                        MySql
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={faDatabase}
                            className="fa-download"
                        />{" "}
                        SQL
                    </p>
                </div>
                <div className="column">
                    <p>
                        <FontAwesomeIcon icon={faGit} className="fa-download" />{" "}
                        Git
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="fa-download"
                        />{" "}
                        GitHub
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faNpm} className="fa-download" />{" "}
                        Next
                    </p>
                </div>
            </div>

            <p className="pTitle">Languages :</p>
            <div className="languages">
                <p>
                    Arabic <span>Fluent</span>
                </p>
                <p>
                    English <span>Intermediate</span>
                </p>
                <p>
                    French <span>Elementary</span>
                </p>
            </div>
            <div className="toolsContainer">
                <p className="pTitle">Tools:</p>
                <div className="column">
                    <p>
                        <FontAwesomeIcon
                            icon={faCode}
                            className="fa-download"
                        />{" "}
                        VS Code
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={faTerminal}
                            className="fa-download"
                        />{" "}
                        Termux
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={faAndroid}
                            className="fa-download"
                        />{" "}
                        Acode
                    </p>
                    <p>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="fa-download"
                        />{" "}
                        GitHub
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
