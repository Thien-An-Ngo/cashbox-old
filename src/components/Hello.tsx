import * as React from "react";

export interface IHelloProps
{
    name: string;
    count: number;
    onClick: () =>  void;
}

export function Hello(props: IHelloProps)
{
    const {name,  count, onClick} = props;
    return (
        <>
            <h3>Oh hey - {name}</h3>
            <h1 onClick={() => onClick()}>Number: {count}</h1>
        </>
    );

}