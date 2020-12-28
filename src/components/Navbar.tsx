import * as React from "react";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const {} = props;
  return (
    <>
      <nav className="my-sticky navbar navbar-expand-sm bg-jade mb-2">
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
