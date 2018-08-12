import React from "react";

export default ({ isMenuOpen, toggleMenu }) => (
  <header>
    <h1>
      <span className="larger">Aptly</span>
      <br />
      <span className="smaller">Named</span>
    </h1>
    <nav>
      <a href="" id="menu-icon" onClick={toggleMenu} />
      <ul className={isMenuOpen ? "open" : ""}>
        <li>
          <a href="#">Table of Contents</a>
        </li>
        <li>
          <a href="#">Preface</a>
        </li>
        <li>
          <a href="#">Epilogue</a>
        </li>
      </ul>
    </nav>
  </header>
);
