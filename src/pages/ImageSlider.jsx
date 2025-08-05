import React, { useState, useRef } from 'react';
import '../styles/ImageSlider.css';

const ImageSlider = ({ images = [], productName = 'Product' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    if (!images || images.length === 0) {
        console.log('No images provided for', productName);
        return (
            <div className="slider-container">
                <div className="slider-image">
                    <span className="no-image">No images available</span>
                </div>
            </div>
        );
    }

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current && touchEndX.current) {
            const deltaX = touchStartX.current - touchEndX.current;
            if (deltaX > 50) {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            } else if (deltaX < -50) {
                setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? images.length - 1 : prevIndex - 1
                );
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    const currentImage = images[currentIndex] || '';

    return (
        <div
            className="slider-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="slider-image">
                {currentImage ? (
                    <img
                        src={`http://localhost:5000${currentImage}`} // Ожидаем /public/images/<filename>
                        alt={`${productName} ${currentIndex + 1}`}
                        onError={(e) => {
                            console.log(`Image load failed for http://localhost:5000${currentImage} in ${productName}`);
                            e.target.src = 'http://localhost:5000/public/images/placeholder-image.jpg';
                            e.target.onerror = null;
                        }}
                    />
                ) : (
                    <span className="no-image">No image available</span>
                )}
            </div>
            <div className="slider-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;