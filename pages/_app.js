import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "../styles/main.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Loading from "./loading";

const StarsCanvas = dynamic(() => import("./background.tsx"), { ssr: false });
const Footer = dynamic(() => import("./Footer.js"), { ssr: false });

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 15000); // Set loading to false after 15 seconds

        return () => clearTimeout(timer);
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
                <link rel="icon" href="/icon.jpg" />
            </Head>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Component {...pageProps} />
                    <Footer />
                    <Analytics />
                    <StarsCanvas />
                </>
            )}
        </>
    );
}

export default MyApp;
