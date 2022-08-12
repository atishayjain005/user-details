import React from "react";

export default function Navbar({button}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-5">
        <a className="navbar-brand mb-0 h1" href="#1">
          User Details
        </a>
        {button}
      </div>
    </nav>
  );
}
