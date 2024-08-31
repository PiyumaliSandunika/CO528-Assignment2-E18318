import React, { useRef, useEffect } from 'react';

const CircularSlider = ({ angle, onChange }) => {
    const circularSliderRef = useRef(null);
    const knobRef = useRef(null);
    const radius = 100; // Radius for the circular slider

    useEffect(() => {
        updateKnobPosition(angle);
    }, [angle]);

    const normalizeAngle = (angle) => (angle % 360 + 360) % 360;

    const updateKnobPosition = (angle) => {
        const modValue = normalizeAngle(angle);
        const radians = (modValue - 90) * (Math.PI / 180); // Offset by 90 degrees to start at the top
        const x = radius + radius * Math.cos(radians);
        const y = radius + radius * Math.sin(radians);
        if (knobRef.current) {
            knobRef.current.style.left = `${x}px`;
            knobRef.current.style.top = `${y}px`;
        }
    };

    const handleSliderMouseDown = (e) => {
        const handleMouseMove = (e) => {
            const rect = circularSliderRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const angle = (Math.atan2(y, x) * (180 / Math.PI) + 90 + 360) % 360;
            onChange(Math.round(angle));
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div
            className="circular-slider"
            ref={circularSliderRef}
            onMouseDown={handleSliderMouseDown}
        >
            <div className="knob" ref={knobRef}></div>
            <div className="dot" style={{ top: '-3%', left: '50%' }}></div>
            <div className="label" style={{ top: '-20px', left: '50%' }}>0</div>
            <div className="dot" style={{ top: '103%', left: '50%' }}></div>
            <div className="label" style={{ top: '112%', left: '50%' }}>180</div>
       
        </div>
    );
};

export default CircularSlider;
