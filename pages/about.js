import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const About = () => {
    const router = useRouter();

    const zoomOut = e => {
        e.preventDefault();
        router.push("/");
    };
    return (
        <section className="earthSection">
           
            <header>
                <nav id="mainNav"></nav>
            </header>

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
            <a href="cv.docx" download className="cv">
                CV <i className="fa-solid fa-download"></i>
            </a>
            <p className="paragraph">
                MIS graduate with a passion for web development Front-end &
                Back-end.
            </p>
            <p className="pTitle">Skills</p>
            <div className="skillsContainer">
                <div className="column">
                    <p>
                        <i className="fa-brands fa-html5"></i> HTML
                    </p>
                    <p>
                        <i className="fa-brands fa-css3-alt"></i> CSS
                    </p>
                    <p>
                        <i className="fa-brands fa-js-square"></i> JS
                    </p>
                </div>
                <div className="column">
                    <p>
                        <i className="fa-brands fa-php"></i> PHP
                    </p>
                    <p>
                        <i className="fa-solid fa-database"></i> MySql
                    </p>
                    <p>
                        <i className="fa-solid fa-database"></i> SQL
                    </p>
                </div>
                <div className="column">
                    <p>
                        <i className="fa-brands fa-html5"></i> HTML
                    </p>
                    <p>
                        <i className="fa-brands fa-css3-alt"></i> CSS
                    </p>
                    <p>
                        <i className="fa-brands fa-js-square"></i> JS
                    </p>
                </div>
            </div>

            <p className="pTitle">Languages</p>
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

            
        </section>
    );
};

export default About;
