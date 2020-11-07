import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

export function App()
{
    const appName = "Awesome TypeScript, React, Parcel App!";
    const handleClick = ()  => {
        console.log('do click');
    }
    return (
        <>
            <Hello name={appName} count={30} onClick={handleClick}/>
        </>
    );
}