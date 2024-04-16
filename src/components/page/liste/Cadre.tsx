import React from "react";
import { NavLink } from "react-router-dom";

const Cadre = (props) => {


  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        {props.image.map((url, index) => (
          <NavLink
            key={index}
            to="/Pageimage"
            state={{ from: [url, props.title] }}
            className="mx-2"
          >
            <img
              key={index}
              className="h-32 w-32 rounded-lg object-cover"
              src={url}
              alt={`${props.title}-${index}`}

            />
          </NavLink>
        ))}
      </div>

    </div>
  );
};

export default Cadre;
