// pages/_app.js
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/index.css";
import "../styles/planets.scss";
import "../styles/header.scss";
import "../styles/footer.css";
import { StarsCanvas } from "./background";
import AudioButton from "./header";
import Footer from "./Footer.js";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false; // Tell FontAwesome to skip adding the CSS automatically since it's already imported

function MyApp({ Component, pageProps }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const router = useRouter();

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        audioRef.current.play();
    }, []);

    useEffect(() => {
        const prefetchRoutes = [
            "/about",
            "/contactForm",
            "/education",
            "/nasa",
            "/header",
            "/Footer",
            "/",
            "/project",
            "/background",
            "/Slideshow",
            "/blog"
        ];

        prefetchRoutes.forEach(route => router.prefetch(route));
    }, [router]);

    useEffect(() => {
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", function () {
                navigator.serviceWorker.register("/service-worker.js").then(
                    function (registration) {
                        console.log(
                            "Service Worker registration successful with scope: ",
                            registration.scope
                        );
                    },
                    function (err) {
                        console.log(
                            "Service Worker registration failed: ",
                            err
                        );
                    }
                );
            });
        }
    }, []);

    return (
        <>
            <Head>
                <link rel="preload" href="/img/dani.png" as="image" />
                <link rel="preload" href="/img/daniStars.png" as="image" />
                <link rel="preload" href="/img/jounblat.png" as="image" />
                <link rel="preload" href="/img/jounblatStars.png" as="image" />
                <link rel="preload" href="/img/fullsun.gif" as="image" />
                <link rel="preload" href="/img/earth.gif" as="image" />
                <link rel="preload" href="/img/satellite.gif" as="image" />
                <link rel="preload" href="/img/venus.gif" as="image" />
                <link rel="preload" href="/img/shuttle.gif" as="image" />
                <link rel="preload" href="/img/mercury.gif" as="image" />
                <link rel="preload" href="/img/ufo.gif" as="image" />
                <link rel="preload" href="/img/ss1.jpg" as="image" />
                <link rel="preload" href="/img/ss3.jpg" as="image" />
                <link rel="preload" href="/img/ss4.jpg" as="image" />
                <link rel="preload" href="/img/ss5.jpg" as="image" />
            </Head>
            <AudioButton
                handlePlayPause={handlePlayPause}
                isPlaying={isPlaying}
            />
            <StarsCanvas />
            <Component {...pageProps} />
            <audio ref={audioRef} src="" loop />
            <Footer />
        </>
    );
}

export default MyApp;
