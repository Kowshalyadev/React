import React, { useState } from "react";
import './cal.css'; // Make sure this file exists for custom styles

function Calculator() {
    const [inputValue, setInputValue] = useState("");

    const onclicks = (e) => {
        const value = e.target.value;
        if (value === "=") {
            try {
                const result = eval(inputValue); // Use eval carefully
                setInputValue(result.toString());
            } catch (err) {
                setInputValue("error");
            }
        } else if (value === "c") {
            setInputValue("");
        } else {
            setInputValue(inputValue + value);
        }
    };

    return (
        <div className="calculator-container">
            <div className="calculator-box">
                <input type="text" id="value" value={inputValue} readOnly />
                <div className="button-row">
                    <button value="7" onClick={onclicks}>7</button>
                    <button value="8" onClick={onclicks}>8</button>
                    <button value="9" onClick={onclicks}>9</button>
                    <button value="*" onClick={onclicks}>*</button>
                </div>
                <div className="button-row">
                    <button value="4" onClick={onclicks}>4</button>
                    <button value="5" onClick={onclicks}>5</button>
                    <button value="6" onClick={onclicks}>6</button>
                    <button value="-" onClick={onclicks}>-</button>
                </div>
                <div className="button-row">
                    <button value="1" onClick={onclicks}>1</button>
                    <button value="2" onClick={onclicks}>2</button>
                    <button value="3" onClick={onclicks}>3</button>
                    <button value="+" onClick={onclicks}>+</button>
                </div>
                <div className="button-row">
                    <button value="%" onClick={onclicks}>%</button>
                    <button value="0" onClick={onclicks}>0</button>
                    <button value="." onClick={onclicks}>.</button>
                    <button value="=" onClick={onclicks}>=</button>
                </div>
                <div className="button-row center-button">
                    <button value="c" onClick={onclicks}>C</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
