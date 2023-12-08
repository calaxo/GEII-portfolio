import React from 'react';
import { useLocation } from 'react-router-dom';

import '@styles/Cadre.css';

const Pageimage = () => {
    const location = useLocation();
    const traceFileName = location.state.from; // Accédez à la propriété from de state

    return (
        <div className="pageimage">
            <img data-text="Texte à afficher" className='imageengrand' src={`./src/assetspreuve/${traceFileName}.jpg`} alt="PC" />
            <p>PC</p>
        </div>
    );
};

export default Pageimage;
