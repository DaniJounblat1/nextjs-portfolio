// components/ContactForm.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [messageSent, setMessageSent] = useState(false); // State to track if message was sent

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        setMessageSent(true); // Set message sent to true
    };

    const router = useRouter();

    const zoomOut = e => {
        e.preventDefault();
        router.push("/");
    };

    useEffect(() => {
        let timer;
        if (messageSent) {
            timer = setTimeout(() => {
                router.push("/");
            }, 4000); // Redirect after seconds
        }

        return () => clearTimeout(timer);
    }, [messageSent, router]);

    return (
        <section className="contact">
            <div className="imgDiv">
                <img
                    src="/img/satellite.gif"
                    alt="satellite"
                    className="satellite planetsImg"
                />
            </div>
            <header>
                <nav id="mainNav"></nav>
            </header>

            <a href="#" onClick={zoomOut} className="closeButton">
                &times;
            </a>

       <div className="contact-container">
            <h1>contact</h1>
                {!messageSent ? (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name"> Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder=" Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"> Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder=" Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message"> Message*</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder=" Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                ) : (
                    <h3 className="sentMessage">
                        Message sent successfully. Redirecting...
                    </h3>
                )}
            </div>
        </section>
    );
}
