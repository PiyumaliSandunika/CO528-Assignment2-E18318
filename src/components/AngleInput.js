import React from 'react';

const AngleInput = ({ angle, onChange }) => {
    const normalizeAngle = (angle) => {
        return (angle % 360 + 360) % 360;
    };

    return (
        <div className="input-group">
            <label htmlFor="angleInput">Angle: </label>
            <input
                type="number"
                id="angleInput"
                value={normalizeAngle(angle)}
                min="0"
                max="360"
                onChange={(e) => onChange(normalizeAngle(parseInt(e.target.value)))}
            />
        </div>
    );
};

export default AngleInput;
