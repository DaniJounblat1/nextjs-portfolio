import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const NasaLibraryComponent = () => {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("mars");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const apiKey = "Osu3B2FVbc4a8hF3cBsPXvF8KGfF5p2yS4xr8b4u"; // Replace with your NASA API key if required
    const baseUrl = "https://images-api.nasa.gov/search";

    const fetchItems = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(`${baseUrl}?q=${query}`);
            if (!response.ok) {
                throw new Error("Error fetching data");
            }

            const data = await response.json();
            setItems(data.collection.items);
        } catch (error) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, [query]);

    const handleQueryChange = event => {
        setQuery(event.target.value);
    };

    const router = useRouter();

    const zoomOut = e => {
        e.preventDefault();
        router.push("/");
    };
    return (
        <section className="nasa">
            <header>
                <nav id="mainNav"></nav>
            </header>

            <a href="#" onClick={zoomOut} className="closeButton">
                &times;
            </a>
            <div className="imgDiv">
                <img
                    src="/img/shuttle.gif"
                    alt="Earth"
                    className="shuttle3"
                />
            </div>
            <div className="nasa-library-container">
                <h2>NASA Image and Video Library</h2>
                <input
                    type="text"
                    value={query}
                    onChange={handleQueryChange}
                    placeholder="Search..."
                />
                <button onClick={fetchItems}>Search</button>

                {loading && <p>Loading...</p>}
                {error && <p className="error-message">{error}</p>}

                <div className="items-grid">
                    {items.map((item, index) => (
                        <div key={index} className="item-card">
                            {item.links && item.links[0].href && (
                                <img
                                    src={item.links[0].href}
                                    alt={item.data[0].title}
                                    className="item-image"
                                />
                            )}
                            <h3>{item.data[0].title}</h3>
                            <p>{item.data[0].description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NasaLibraryComponent;
