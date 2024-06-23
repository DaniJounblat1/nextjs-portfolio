import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import Footer from "./Footer";

const Project = () => {
    const router = useRouter();

    const zoomOut = e => {
        e.preventDefault();
        router.push("/");
    };

    return (
        <section className="mercurySection">
            <p className="mainTitle">Project</p>
            <a href="#" onClick={zoomOut} className="closeButton">
                &times;
            </a>
            <div className="imgDiv">
                <img
                    src="/img/mercury.gif"
                    alt="mercury"
                    className="mercuryImg planetsImg"
                />
            </div>
            <div className="projectSection">
                <div className="projectItem">
                    <div className="laptop-container">
                        <img src="/img/laptop.png" alt="Laptop" />
                        <div className="slideshow-root">
                            <div className="imgCon">
                                <img
                                    src="/img/ss1.jpg"
                                    className="slideshow-image"
                                    alt="Laptop"
                                />
                            </div>
                        </div>
                    </div>

                    <h2 className="projectTitle">Samsung E-commerce Website</h2>
                    <p className="projectInfo">
                        This project is an e-commerce website for Samsung
                        products, built using PHP. It showcases various products
                        with a user-friendly interface.
                    </p>
                    <div className="linkContainer">
                        <Link href="https://github.com/DaniJounblat1/php-samsung-website.git" className="githubLink">
                            GitHub
                        </Link>
                        <Link href="https://samsungdemo.kesug.com" className="githubLink" target="_blank">
                            Demo
                        </Link>
                    </div>
                </div>
            </div>
            <div className="projectSection">
                <div className="projectItem">
                    <div className="laptop-container">
                        <img src="/img/laptop.png" alt="Laptop" />
                    </div>

                    <h2 className="projectTitle">Working On More Projects</h2>
                </div>
            </div>
        </section>
    );
};

export default Project;
