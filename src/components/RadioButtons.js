import React from 'react';

const RadioButtons = ({ angle, onChange }) => {
    const values = [0, 45, 60, 90, 180];

    return (
        <div className="input-group radio-buttons">
            {values.map((value) => (
                <label key={value}>
                    <input
                        type="radio"
                        name="angle"
                        value={value}
                        checked={angle === value}
                        onChange={() => onChange(value)}
                    />
                    {value}
                </label>
            ))}
        </div>
    );
};

export default RadioButtons;
