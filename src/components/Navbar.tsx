import * as React from "react";

import "../static/css/navbar.css";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const {} = props;
  return (
    <>
      <nav className="sticky navbar navbar-expand-sm bg-jade">
        <a className="navbar-brand text-white" href="#">
          Cashbox
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        	<span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </>
  );
}
