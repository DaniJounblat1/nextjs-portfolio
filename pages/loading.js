// components/Loading.js
import React, { useEffect, useState } from "react";
import StarsCanvas from "./background";

const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress =>
                prevProgress >= 100 ? 100 : prevProgress + 1
            );
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
        }, 15000); // 10 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="loading-screen">
            <img
                src="/img/loading.gif"
                alt="Loading Image"
                className="loading-image"
            />
            <div className="loading">
                <div className="loading-text">Loading</div>
                <div className="loading-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <StarsCanvas />

            <style jsx>{`
                .loading {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                }
                .loading-screen {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #000;
                    z-index: 9999;
                }
                .loading-image {
                    width: 160px;
                    height: auto;
                    margin-bottom: 20px;
                }
                .loading-text {
                    color: #fff;
                    font-size: 24px;
                    margin-bottom: 10px;
                }
                .loading-dots {
                    display: flex;
                }
                .dot {
                    width: 8px;
                    height: 8px;
                    margin: 0 5px;
                    background-color: #fff;
                    border-radius: 50%;
                    animation: dot-blink 1.4s infinite both;
                }
                .dot:nth-child(1) {
                    animation-delay: 0.2s;
                }
                .dot:nth-child(2) {
                    animation-delay: 0.4s;
                }
                .dot:nth-child(3) {
                    animation-delay: 0.6s;
                }
                .progress-bar {
                    width: 60%;
                    height: 11px;
                    background-color: transparent;
                    border-radius: 50px;
                    overflow: hidden;
                    padding: 5px;
                    border: 1px solid #682ae9;
                }
                .progress {
                    border-radius: 50px;
                    height: 100%;
                    background-color: #682ae9;
                    transition: width 0.3s ease;
                }

                @keyframes dot-blink {
                    0%,
                    80%,
                    100% {
                        opacity: 0;
                    }
                    40% {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Loading;
