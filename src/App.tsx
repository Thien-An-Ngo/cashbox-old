import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import { Navbar } from "./components/Navbar"

export function App() {
    let count = 0;
    const appName = "Awesome TypeScript, React, Cashbox App!";
    const handleClick = ()  => {
        console.log(count);
    }
    return (
      <>
        <Navbar />
        <div className="container">
          <Hello name={appName} count={count} onClick={handleClick} />
        </div>
      </>
    );
}