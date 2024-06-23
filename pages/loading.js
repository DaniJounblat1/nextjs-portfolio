// components/Loading.js
import React from "react";

const Loading = () => {
    return (
        <div className="loading-screen">
            <img
                src="/img/m.gif"
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
            <style jsx>{`
                .loading {
                    display: flex;

                    align-items: center;

                    justify-content: center;
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
                    width: 200px;
                    height: auto;
                    margin-bottom: 20px;
                    // animation: spin 2s linear infinite;
                }
                .loading-text {
                    color: #fff;
                    font-size: 24px;
                    margin-right: 10px;
                }
                .loading-dots {
                    display: flex;
                }
                .dot {
                    width: 10px;
                    height: 10px;
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
