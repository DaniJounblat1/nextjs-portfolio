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
                <link rel="preload" href="/img/earth.gif" as="image" />
                <link rel="preload" href="/img/blackhole.webm" as="video" />
                <link rel="icon" href="/icon.jpg" />
            </Head>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <StarsCanvas />
                    <Component {...pageProps} />
                    <Footer />
                    <Analytics />
                </>
            )}
        </>
    );
}

export default MyApp;
