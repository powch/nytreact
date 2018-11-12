import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      NYT React Articles
    </a>
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">
        Home
      </a>
      <a className="nav-item nav-link" href="/saved">
        Features
      </a>
    </div>
  </nav>
);

export default Nav;
