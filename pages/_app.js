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
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically

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
        // Check if the audio is paused and if so, play it
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise
                .then(_ => {
                    // Autoplay started
                })
                .catch(error => {
                    // Autoplay was prevented, let's start the audio when the user interacts with the page
                    document.addEventListener("click", startAudio);
                });
        }
    }, []);

    const startAudio = () => {
        audioRef.current.play();
        document.removeEventListener("click", startAudio);
    };

    useEffect(() => {
        const prefetchRoutes = [
            "/about",
            "/contactForm",
            "/project",
            "/background"
        ];

        prefetchRoutes.forEach(route => router.prefetch(route));
    }, [router]);

    return (
        <>
            <Head>
                {
                    // <link rel="preload" href="/img/dani.png" as="image" />
                    //                 <link rel="preload" href="/img/daniStars.png" as="image" />
                    //                 <link rel="preload" href="/img/jounblat.png" as="image" />
                    //                 <link rel="preload" href="/img/jounblatStars.png" as="image" />
                }
                <link rel="preload" href="/img/fullsun.gif" as="image" />
                <link rel="preload" href="/img/earth.gif" as="image" />
                <link rel="preload" href="/img/satellite.gif" as="image" />
                <link rel="preload" href="/img/venus.gif" as="image" />
                <link rel="preload" href="/img/shuttle.gif" as="image" />
                <link rel="preload" href="/img/mercury.gif" as="image" />
                <link rel="preload" href="/img/ufo.gif" as="image" />
                <link rel="preload" href="/img/ss1.jpg" as="image" />
                <link
                    rel="preload"
                    href="/sound.m4a"
                    as="audio"
                    type="audio/m4a"
                />
                <link
                    rel="preload"
                    href="/img/blackhole.webm"
                    as="video"
                    type="video/webm"
                />
            </Head>
            <AudioButton
                handlePlayPause={handlePlayPause}
                isPlaying={isPlaying}
            />
            <StarsCanvas />
            <Component {...pageProps} />
            <audio ref={audioRef} src="./sound.m4a" loop />
            <Footer />
        </>
    );
}

export default MyApp;
