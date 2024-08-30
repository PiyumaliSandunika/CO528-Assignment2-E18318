import React from 'react';

const AngleInput = ({ angle, onChange }) => {
    return (
        <div className="input-group">
            <label htmlFor="angleInput">Angle: </label>
            <input
                type="number"
                id="angleInput"
                value={angle}
                min="0"
                max="360"
                onChange={(e) => onChange(parseInt(e.target.value))}
            />
        </div>
    );
};

export default AngleInput;
