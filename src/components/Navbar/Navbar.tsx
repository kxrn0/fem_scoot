import { useEffect, useState } from "react";
import { Link } from "wouter";
import IconX from "../../icons/IconX.tsx";
import IconMenu from "../../icons/IconMenu.tsx";
import Logo from "../../icons/Logo.tsx";
import SCNavbar from "./Navbar.styled.tsx";
import scroll_to_bottom from "../../utilities/scroll_to_bottom.ts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "";

    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen]);

  return (
    <SCNavbar>
      <div className="main">
        <label className="navbar-toggle">
          <input
            type="checkbox"
            checked={isOpen}
            onChange={(e) => setIsOpen(e.target.checked)}
          />
          {isOpen ? <IconX /> : <IconMenu />}
        </label>
        <Link to="/fem_scoot/">
          <Logo />
          <span></span>
        </Link>
      </div>
      <div
        className={`overlay ${isOpen && "active"}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className={`links ${isOpen && "open"}`}>
        <div className="navigation">
          <Link className="fs-body-2" to="/fem_scoot/about">
            About
          </Link>
          <Link className="fs-body-2" to="/fem_scoot/location">
            Location
          </Link>
          <Link className="fs-body-2" to="/fem_scoot/careers">
            Careers
          </Link>
        </div>
        <button className="button-primary" onClick={scroll_to_bottom}>
          Get Scootin
        </button>
      </div>
    </SCNavbar>
  );
}
