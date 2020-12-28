import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import { Navbar } from "./components/Navbar"
import './App.scss';

export function App() {
    let count = 0;
    const appName = "Awesome TypeScript, React, Cashbox App!";
    const handleClick = ()  => {
        console.log(count);
    }
    return (
      <>
        <div className={"cashbox-app"}>
          <Navbar />
          <div className="container mycontainer">
            <Hello name={appName} count={count} onClick={handleClick} />
          </div>
          <div className="window-height"></div>
        </div>
      </>
    );
}