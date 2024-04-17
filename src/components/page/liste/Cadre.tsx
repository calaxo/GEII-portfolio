
import { NavLink } from "react-router-dom";

interface PropsCadre {    
  image: string[];
  title: string;
}

const Cadre = ({image ,title}:PropsCadre) => {


  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        {image.map((url, index) => (
          <NavLink
            key={index}
            to="/Pageimage"
            state={{ from: [url, title] }}
            className="mx-2"
          >
            <img
              key={index}
              className="h-32 w-32 rounded-lg object-cover"
              src={url}
              alt={`${title}-${index}`}

            />
          </NavLink>
        ))}
      </div>

    </div>
  );
};

export default Cadre;
