import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Button from "@material-ui/core/Button";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slideshow = ({ images }) => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex(prevIndex =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleBack = () => {
        setIndex(prevIndex =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slideshow-root">
            <AutoPlaySwipeableViews
                index={index}
                onChangeIndex={index => setIndex(index)}
                enableMouseEvents
            >
                {images.map((image, i) => (
                    <div className="imgCon" key={i}>
                        <img
                            src={image}
                            alt={`Slide ${i + 1}`}
                            className="slideshow-image"
                        />
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <div className="slideshow-buttonContainer">
                <Button onClick={handleBack} color="primary">
                    &#8249;
                </Button>
                <Button onClick={handleNext} color="primary">
                    &#8250;
                </Button>
            </div>
        </div>
    );
};

export default Slideshow;
