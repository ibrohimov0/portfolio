import "./style.css";
import React, { useEffect, useRef } from "react";

const ImageSlider = ({ images,width,top }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const imgContainer = containerRef.current;

        const interval = setInterval(() => {
            const first = imgContainer.firstElementChild;
            console.log(first);
            if (first) {
                imgContainer.removeChild(first);
                imgContainer.appendChild(first);
            }
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="img-container" ref={containerRef}>
            {images.map((src, index) => (
                <div className="box" style={{width,top}} key={index}>
                    <img src={src} alt="image" />
                </div>
            ))}
        </div>
    );
};

export default ImageSlider;
