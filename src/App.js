import React, { useState } from 'react';
import './App.css';
import AngleSelectorPage from './components/AngleSelectorPage';

function App() {
    const [angle, setAngle] = useState(0);

    return (
        <div>
            <AngleSelectorPage/>
        </div>
    );
}

export default App;
