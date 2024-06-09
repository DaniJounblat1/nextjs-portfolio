import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

const Education = () => {
    const router = useRouter();

    const zoomOut = e => {
        e.preventDefault();
        router.push("/");
    };

    return (
        <section>
            <header>
                <nav id="mainNav"></nav>
            </header>
            <div className="venusSection">
                <a href="#" onClick={zoomOut} className="closeButton">
                    &times;
                </a>
                <div className="imgDiv">
                    <img
                        src="/img/venus.gif"
                        alt="Venus"
                        className="venusImg planetsImg"
                    />
                </div>
                <p className="mainTitle venusTitle">Education</p>
                <p>
                    <strong>Degree:</strong> <br />
                    Bachelor of Management Information Systems (MIS)
                </p>
                <p>
                    <strong>Institution:</strong> <br />
                    Islamic University of Lebanon, Baalback Campus
                </p>
                <p>
                    <strong>Duration of Study:</strong> <br />
                    2020 – 2023
                </p>
                <p>
                    <strong>Relevant Coursework:</strong> <br />
                    Included key subjects such as Database Management, where I
                    gained proficiency in SQL and MySQL database technologies;
                    Web Development, which covered both front-end and back-end
                    development skills; and Business Administration, focusing on
                    management principles and business strategy.
                </p>
                <p>
                    <strong>General Average:</strong> <br />
                    70/100, indicating a solid grasp of course materials and a
                    strong foundational knowledge in both technical and
                    managerial disciplines.
                </p>
            </div>
        </section>
    );
};

export default Education;
