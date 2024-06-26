import { useEffect, useRef } from 'react';

const Home = () => {
    const containerRef = useRef(null);

    const zoomIn = (element) => {
        const container = containerRef.current;
        const names = document.querySelectorAll('.names');
        names.forEach((name) => {
            name.style.display = 'none'; // Hide all planet names during zoom-in
        });

        const rect = element.getBoundingClientRect();
        const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const scaleX = window.innerWidth / rect.width;
        const scaleY = window.innerHeight / rect.height;
        const minScale = Math.min(scaleX, scaleY);

        const offsetX = window.innerWidth / 2 - (rect.left + scrollX + rect.width / 2);
        const topPadding = 70; // Additional padding to move the element more towards the top, adjust as needed
        const offsetY = -(rect.top + scrollY - window.pageYOffset + topPadding);

        container.style.transition = '2s ease'; // Apply transition for zoom-in
        container.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${minScale})`;
        container.style.transformOrigin = `${rect.left + scrollX + rect.width / 2}px ${rect.top + scrollY}px`;

        sessionStorage.setItem('zoomed', 'true');
        sessionStorage.setItem('zoomTransform', container.style.transform);
        sessionStorage.setItem('zoomOrigin', container.style.transformOrigin);

        setTimeout(() => {
            const zoomTarget = element.getAttribute('data-zoom-target');
            if (zoomTarget) {
                window.location.href = zoomTarget;
            }
        }, 1000); // Change delay as needed
    };

    const toggleSunlight = () => {
        const sunCon = document.getElementById('sunCon');
        const planets = document.querySelectorAll(
            '.earthElements,.venusElements,.mercuryElements,.spaceBackground,body,.ufoElements,.shuttleElements,.satelliteElements'
        );

        sunCon.classList.toggle('sunlight'); // Toggle sunlight class for the sun
        planets.forEach((planet) => {
            planet.classList.toggle('planetlight'); // Toggle planetlight class for each planet
        });
    };

    const zoomOut = () => {
        const container = containerRef.current;
        container.style.transition = '1.5s ease'; // Apply transition for zoom-out
        container.style.transform = ''; // Reset the transform
        container.style.transformOrigin = ''; // Reset the transform origin

        sessionStorage.removeItem('zoomed');
        sessionStorage.removeItem('zoomTransform');
        sessionStorage.removeItem('zoomOrigin');

        const names = document.querySelectorAll('.names');
        names.forEach((name) => {
            name.style.display = 'block';
        });
    };

    useEffect(() => {
        const isZoomed = sessionStorage.getItem('zoomed');
        if (isZoomed === 'true') {
            const container = containerRef.current;
            container.style.transition = 'none'; // Remove transition during zoom-in
            container.style.transform = sessionStorage.getItem('zoomTransform');
            container.style.transformOrigin = sessionStorage.getItem('zoomOrigin');
            setTimeout(() => {
                container.style.transition = ''; // Reapply transition after zoom-in
            }, 0);
        }

        const timeoutId = setTimeout(zoomOut, 700);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
            <div id="all" ref={containerRef}>
                <div className="navbar">{/* Your navbar content */}</div>

                <div id="spaceBackground" className="spaceBackground">
                    <div className="blackholeDiv">
                        <video autoPlay muted loop className="blackhole">
                            <source src="/img/blackhole.webm" type="video/webm" />
                        </video>
                        <div className="blur"></div>
                    </div>
                    <div className="NameContainer">
                        <div className="FirstNames">
                            <img className="FirstName" src="/img/dani.png" alt="" loading="lazy" />
                            <img className="FirstNameStars" src="/img/daniStars.png" alt="" loading="lazy" />
                        </div>
                        <div className="LastNames">
                            <img className="LastName" src="/img/jounblat.png" alt="" loading="lazy" />
                            <img className="LastNameStars" src="/img/jounblatStars.png" alt="" loading="lazy" />
                        </div>
                    </div>
                    <div className="planets" id="planets">
                        <div className="sunCon" id="sunCon" onClick={toggleSunlight}>
                            <img className="sun" src="/img/fullsun.gif" alt="" loading="lazy" />
                        </div>

                        <div className="earthDiv" id="earth">
                            <div className="earthElements planetsElements">
                                <p className="names earthName">About</p>
                                <img
                                    src="/img/earth.gif"
                                    alt="Earth"
                                    className="zoom-target earthImg planetsImgs"
                                    onClick={e => zoomIn(e.currentTarget)}
                                    data-zoom-target="/about"
                                />
                            </div>
                            <div className="satelliteElements planetsElements">
                                <p className="names satelliteTitle" id="names">
                                    Contact
                                </p>
                                <img
                                    className="zoom-target satelliteImg spaceShipsImgs"
                                    src="/img/satellite.gif"
                                    alt=""
                                    onClick={e => zoomIn(e.currentTarget)}
                                    data-zoom-target="/contactForm"
                                />
                            </div>
                        </div>

                        <div className="venusDiv" id="venus">
                            <div className="venusElements planetsElements">
                                <img
                                    src="/img/venus.gif"
                                    alt="Venus"
                                    className="zoom-target venusImg planetsImgs"
                                    onClick={e => zoomIn(e.currentTarget)}
                                    data-zoom-target="/education"
                                />
                            </div>
                            <p className="names venusName">Education</p>
                            <div className="shuttleElements planetsElements">
                                <p className="names shuttleTitle">Nasa</p>
                                <img
                                    className="zoom-target shuttleImg spaceShipsImgs"
                                    src="/img/shuttle.gif"
                                    alt=""
                                    onClick={e => zoomIn(e.currentTarget)}
                                    data-zoom-target="/nasa"
                                />
                            </div>
                        </div>

                        <div className="mercuryDiv" id="mercury">
                            <div className="mercuryElements planetsElements">
                                <p className="names mercuryName">Projects</p>
                                <img
                                    src="/img/mercury.gif"
                                    alt="Mercury"
                                    className="zoom-target mercuryImg planetsImgs"
                                    onClick={e => zoomIn(e.currentTarget)}
                                    data-zoom-target="/project"
                                />
                            </div>
                            <div className="ufoElements planetsElements">
                                <p className="names ufoTitle">Blogs</p>
                                <img
                                    className="zoom-target ufoImg spaceShipsImgs"
                                    src="/img/ufo.gif"
                                    alt=""
                                    onClick={e => zoomIn(e.currentTarget)}
                                    data-zoom-target="/blog"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
