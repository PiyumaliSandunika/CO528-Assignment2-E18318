import React, { useState } from 'react';
import AngleInput from './AngleInput';
import CircularSlider from './CircularSlider';
import RadioButtons from './RadioButtons';

const AngleSelectorPage = () => {
    const [angle, setAngle] = useState(0);

    return (
        <div className="container">
            <h1>Angle Selector</h1>
            <AngleInput angle={angle} onChange={setAngle} />
            <CircularSlider angle={angle} onChange={setAngle} />
            <RadioButtons angle={angle} onChange={setAngle} />
        </div>
    );
};

export default AngleSelectorPage;
