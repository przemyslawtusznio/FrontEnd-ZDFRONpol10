import React from "react";
import { ManipulatorProps } from "../../Helpers/interfaces";

const Manipulator: React.FC<ManipulatorProps> = ({ setCount} ) => {

    const plusButtonClickHandole = () => {
//        console.log("Button + click")
//        setCount(5) //albo podaje number albo funkcję callbackową w której mam dostęp do poprzedniego stanu
        setCount((prevState: number) => prevState + 1)
    }

    return (
    <>
        <button onClick={() => setCount((prevState: number) => prevState - 1)}>-</button>
        <button onClick={plusButtonClickHandole}>+</button>
    </>
    );
};

export default Manipulator;
