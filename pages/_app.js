import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";
import "../styles/index.css";
import "../styles/planets.scss";
import "../styles/header.scss";
import "../styles/footer.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import Loading from "./loading"; // Import the loading component

const StarsCanvas = dynamic(() => import("./background"), { ssr: false });
const AudioButton = dynamic(() => import("./header"), { ssr: false });
const Footer = dynamic(() => import("./Footer.js"), { ssr: false });

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically

function MyApp({ Component, pageProps }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const startAudio = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(error => {
                    // Autoplay was prevented, let's start the audio when the user interacts with the page
                    document.addEventListener("click", startAudio);
                });
                document.removeEventListener("click", startAudio);
            }
        };

        document.addEventListener("click", startAudio);
        return () => {
            document.removeEventListener("click", startAudio);
        };
    }, []);

    useEffect(() => {
        const imagePaths = [
            "/img/earth.gif",

            "/img/venus.gif",

            "/img/mercury.gif",

            "/img/blackhole.webm",
            "/sound.m4a"
        ];

        let loadedItemsCount = 0;

        imagePaths.forEach(path => {
            if (path.endsWith(".webm")) {
                const video = document.createElement("video");
                video.src = path;
                video.preload = "metadata";
                video.onloadeddata = () => {
                    loadedItemsCount++;
                    if (loadedItemsCount === imagePaths.length) {
                        setLoading(false);
                    }
                };
            } else if (path.endsWith(".m4a")) {
                const audio = new Audio(path);
                audio.preload = "auto";
                audio.oncanplaythrough = () => {
                    loadedItemsCount++;
                    if (loadedItemsCount === imagePaths.length) {
                        setLoading(false);
                    }
                };
            } else {
                const img = new Image();
                img.src = path;
                img.loading = "lazy";
                img.onload = () => {
                    loadedItemsCount++;
                    if (loadedItemsCount === imagePaths.length) {
                        setLoading(false);
                    }
                };
            }
        });
    }, []);

    return (
        <>
            <Head>
                <link rel="preload" href="/img/dani.png" as="image" />
                <link rel="preload" href="/img/daniStars.png" as="image" />
                <link rel="preload" href="/img/jounblat.png" as="image" />
                <link rel="preload" href="/img/jounblatStars.png" as="image" />

                <link rel="preload" href="/img/ss1.jpg" as="image" />
                <link rel="preload" href="/img/fullsun.gif" as="image" />
                <link rel="preload" href="/img/earth.gif" as="image" />
                <link rel="preload" href="/img/satellite.gif" as="image" />
                <link rel="preload" href="/img/venus.gif" as="image" />
                <link rel="preload" href="/img/shuttle.gif" as="image" />
                <link rel="preload" href="/img/mercury.gif" as="image" />
                <link rel="preload" href="/img/ufo.gif" as="image" />
                <link rel="preload" href="/img/blackhole.webm" as="video" />
                <link rel="preload" href="/sound.m4a" as="audio" />
            </Head>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <AudioButton
                        handlePlayPause={handlePlayPause}
                        isPlaying={isPlaying}
                    />
                    <StarsCanvas />
                    <Component {...pageProps} />
                    <audio ref={audioRef} src="./sound.m4a" loop />
                    <Footer />
                </>
            )}
        </>
    );
}

export default MyApp;
