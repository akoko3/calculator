import React, { useState} from "react";
import '../assets/css/Calculator.css';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [prevValue, setPrevValue] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleNumberClick = (num) => {
        setDisplay((prev) => (prev === '0' ? num : prev + num));
    };

    const handleOperatorClick = (op) => {
        if(prevValue !== null && operator !== null) {
            handleEqualClick();
        }
        setPrevValue(display);
        setOperator(op);
        setDisplay('0');
    };

    const handleEqualClick = () => {
        if (!prevValue || !operator) return;

    const current = parseFloat(display);
    const previous = parseFloat(prevValue);

    let result;
    switch(operator) {
        case '+':
            result = prevValue + current;
            break;
        case '-':
            result = prevValue - current;
            break;
        case 'X':
            result = prevValue * current;
            break;
        case '/':
            result = prevValue / current;
            break;
        case '%':
            result = prevValue % current;
            break;
        default:
        return;
            
    }

    setDisplay(result.toString());
    setPrevValue(null);
    setOperator(null);
    };

    const handleClear = () => {
        setDisplay('0');
        setPrevValue(null);
        setOperator(null);
    };

    return (
        <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
                <button  onClick={handleClear} className="operator">AC</button>
                <button className="operator">+/-</button>
                <button  onClick={() => handleOperatorClick('%')} className="operator">%</button>
                <button  onClick={() => handleOperatorClick('/')} className="operator">/</button>
                
                <button  onClick={() => handleNumberClick('7')}>7</button>
                <button  onClick={() => handleNumberClick('8')}>8</button>
                <button  onClick={() => handleNumberClick('9')}>9</button>
                <button  onClick={() => handleOperatorClick('X')} className="operator">X</button>
  
                <button  onClick={() => handleNumberClick('4')}>4</button>
                <button  onClick={() => handleNumberClick('5')}>5</button>
                <button  onClick={() => handleNumberClick('6')}>6</button>
                <button  onClick={() => handleOperatorClick('-')} className="operator">-</button>
  
                <button  onClick={() => handleNumberClick('0')}>0</button>
                <button  onClick={() => handleNumberClick('')}>.</button>
                <button className="equal" onClick={ handleEqualClick} >=</button>
                

            </div>
        </div>
    );
};

export default Calculator;