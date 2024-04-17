import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pagedescription = () => {
  const goBack = () => {
    navigate(-"1");
  };

  const navigate = useNavigate();

  const [textPosition, setTextPosition] = useState({ left: 0, top: 0 });
  const [displayText, setDisplayText] = useState("");

  const handleMouseEnter = (event: any) => {
    setDisplayText("Cliquez pour revenir en arrière");
    updateTextPosition(event);
  };

  const handleMouseMove = (event: any) => {
    updateTextPosition(event);
  };

  const handleMouseLeave = () => {
    setDisplayText("");
  };

  const updateTextPosition = (event:any) => {
    setTextPosition({ left: event.pageX + 10, top: event.pageY + 10 });
  };

  const location = useLocation();
  const titre = location.state.from[0]; // Accédez à la propriété from de state
  const ladescription = location.state.from[1]; // Accédez à la propriété from de state
  const markupdescription = { __html: ladescription };
  return (
    <div >
      <button
        className="text-blue-500 hover:text-blue-700 focus:outline-none"
        onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
        onClick={goBack}
      >
        <p className="mb-2 text-lg font-bold">{titre}</p>
        {displayText && (
          <div
            className="absolute rounded bg-gray-100 px-2 py-1 shadow"
            style={{
              left: textPosition.left,
              top: textPosition.top,
            }}
          >
            {displayText}
          </div>
        )}
        <p
          className="mx-16 justify-center text-lg	 font-bold text-gray-700"
          dangerouslySetInnerHTML={markupdescription}
        ></p>
      </button>
    </div>
  );
};

export default Pagedescription;
