import React, { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { HashLink as Link  } from 'react-router-hash-link';
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" >
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link smooth to="/#skill"> Skills </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;