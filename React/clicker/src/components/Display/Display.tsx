import React from "react";
import { DisplayProps } from "../../Helpers/interfaces";
import "./display.css"

// JakiśTyp<x> === jakaśFunkcja(x)

const Display: React.FC<DisplayProps> = ({ numberToDisplay }) => {

    const generateRandomNumber = function() {
        return Math.random();
    };

    return (
    <>
        <p className="random">Random number: {generateRandomNumber()}</p>
        <p>{numberToDisplay}</p>
    </>);
};

export default Display;



// return <p>0</p> -> ReactDOM.render(<p>0</p>)
// <></> to samo co <React.Fragment></React.Fragment>