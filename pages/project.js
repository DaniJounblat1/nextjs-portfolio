
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import Slideshow from "./Slideshow";
import Footer from "./Footer";

const Project = () => {
    const images = [
        "/img/ss1.jpg",
        "/img/ss3.jpg",
        "/img/ss4.jpg",
        "/img/ss5.jpg"
    ];

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
                    <div class="laptop-container">
                        <img src="/img/laptop.png" alt="Laptop" />

                        <Slideshow images={images} />
                    </div>

                    <h2 className="projectTitle">Samsung E-commerce Website</h2>
                    <p className="projectInfo">
                        This project is an e-commerce website for Samsung
                        products, built using PHP. It showcases various products
                        with a user-friendly interface.
                    </p>
                    <div className="linkContainer">
                        <Link href="https://github.com/DaniJounblat1/Samsung-Ecommerce-PHP.git">
                            <a className="githubLink">GitHub</a>
                        </Link>
                        <Link href="https://samsungdemo.kesug.com">
                            <a className="githubLink" target="_blank">
                                Demo
                            </a>
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
