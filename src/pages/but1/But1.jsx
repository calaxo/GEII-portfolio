import { HashRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';


const But1 = () => {

    return (
<div>

<NavLink
    key="But1_sae1"
    to="/But1_sae1"
    className="boutonsaenfc"

  >
    vers la premiere sae
  </NavLink>
        
  <NavLink
    key="But1_sae2"
    to="/But1_sae2"
    className="boutonsae"

  >
    vers la deuxieme sae
  </NavLink> 

  <NavLink
    key="But1_sae3"
    to="/But1_sae3"
    className="boutonsae"

  >
    vers la troisiémé sae
  </NavLink> 
</div>
    );
};

export default But1;