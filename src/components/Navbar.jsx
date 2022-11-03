import React, { useEffect, useState,UseRef } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
//import {FaBars,FaTimes} from "react-icons/fa"
import { HashLink as Link  } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";
import IconButton from '@material-ui/core/IconButton';

import {
  IconFlagFR,
  IconFlagUS,
} from 'material-ui-flags';





function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
   const location = useLocation();

   useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  const { t, i18n } = useTranslation();

	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem("lng", lng);
	};

  return (
  
    <div className="navbar" >
   <nav>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
        </button>
      </div>
      <div className="links">
        <Link to="/"> {t("Home")} </Link>
        <Link smooth to="/#skill"> {t("Skills")} </Link>
        <Link to="/projects"> {t("Projects")} </Link>
        <Link to="/experience"> {t("Experience")} </Link>

        
        <IconButton onClick={() => handleChangeLng('fr')}><IconFlagFR /></IconButton>
        <IconButton onClick={() => handleChangeLng('en')}><IconFlagUS /></IconButton>
      


      </div>
      </nav>
    </div>
  );
}

export default Navbar;