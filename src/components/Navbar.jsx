import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar({ setExpandNavbar, expandNavbar }) {
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location, setExpandNavbar]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/experience"> Experience </Link>
            </div>
        </div>
    );
}

export default Navbar;
