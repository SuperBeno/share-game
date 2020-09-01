import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/langfr-220px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="data:image/png;base64,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"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
