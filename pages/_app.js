import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "../styles/main.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";

const StarsCanvas = dynamic(() => import("./background.tsx"), { ssr: false });
const Footer = dynamic(() => import("./Footer.js"), { ssr: false });

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const imagePaths = [
            "/img/earth.gif",
            "/img/venus.gif",
            "/img/mercury.gif",
            "/img/blackhole.webm"
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
