
import { useLocation  } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate} from "react-router-dom";

import '@styles/pagedescription.css';

const Pagedescription = () => {


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
    const titre = location.state.from[0]; // Accédez à la propriété from de state
    const ladescription = location.state.from[1]; // Accédez à la propriété from de state
    return (
        <div className="pageimage"     

        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>

<button className='btnpageimage' onClick={goBack}>

<p className='titre'>{titre}</p>


{displayText && (
        <div className='boutonretour' style={{position:"absolute" ,left: textPosition.left, top: textPosition.top }}>
            
            {displayText}
        </div>
        )}
            <p className='ladescription'>{ladescription}</p>
            
            </button>
        </div>
    );
};


export default Pagedescription;
