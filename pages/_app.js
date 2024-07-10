import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "../styles/main.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const StarsCanvas = dynamic(() => import("./background.tsx"), { ssr: false });
const Footer = dynamic(() => import("./Footer.js"), { ssr: false });

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const imagePaths = [""];

        imagePaths.forEach(path => {
            if (path.endsWith(".webm")) {
                const video = document.createElement("video");
                video.src = path;
                video.preload = "metadata";
            } else {
                const img = new Image();
                img.src = path;
                img.loading = "lazy";
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
                <link rel="preload" href="/img/loading.gif" as="image" />
            </Head>
            <StarsCanvas />
            <Component {...pageProps} />
            <Footer />
            <Analytics />
        </>
    );
}

export default MyApp;
