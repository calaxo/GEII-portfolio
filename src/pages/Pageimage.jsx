
import { useLocation  } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate} from "react-router-dom";

import '@styles/pageimage.css';

const Pageimage = () => {


    const goBack = () => {
        navigate(-"1");
      }



    const navigate = useNavigate();



    const [textPosition, setTextPosition] = useState({ left: 0, top: 0 });
    const [displayText, setDisplayText] = useState('');
  
    const handleMouseEnter = (event) => {
      setDisplayText('cliquez pour revenir en arriere');
      updateTextPosition(event);
    };
  
    const handleMouseMove = (event) => {
      updateTextPosition(event);
    };
  
    const handleMouseLeave = () => {
      setDisplayText('');
    };
  
    const updateTextPosition = (event) => {
      setTextPosition({ left: event.pageX, top: event.pageY });
    };

    const location = useLocation();
    const traceFileName = location.state.from; // Accédez à la propriété from de state

    return (
        <div className="pageimage"     

        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>

<button className='btnpageimage' onClick={goBack}>
<img data-text="Texte yà afficher" className='imageengrand' src={`${traceFileName}`} alt="PC" />

{displayText && (
        <div className='boutonretour' style={{position:"absolute" ,left: textPosition.left, top: textPosition.top }}>
            
            {displayText}
        </div>
        )}
            <p className='titre'>PC</p>

            </button>
        </div>
    );
};


export default Pageimage;
