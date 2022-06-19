import NumberFormat from 'react-number-format';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Layout = () => {
    const { 
        preState, input,
        inputNum, operatorType,
        equals, plusMinus,
        percent, reset
     } = useContext(DataContext);

    return (
        <div className="wrapper">
            <div className="display">
                {input !== "" || input === "0" ? (
                    <NumberFormat 
                    value={input} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    /> 
                ):(
                    <NumberFormat 
                    value={preState} 
                    displayType={'text'} 
                    thousandSeparator={true}
                    />
                    )}
            </div>
            <div className="dark-gray" onClick={reset}>AC</div>
            <div className="dark-gray" onClick={percent}>%</div>
            <div className="dark-gray" onClick={plusMinus}>±</div>
            <div className="btn-orange" onClick={operatorType}>/</div>

            <div className="btn" onClick={inputNum}>7</div>
            <div className="btn" onClick={inputNum}>8</div>
            <div className="btn" onClick={inputNum}>9</div>
            <div className="btn-orange" onClick={operatorType}>x</div>

            <div className="btn" onClick={inputNum}>4</div>
            <div className="btn" onClick={inputNum}>5</div>
            <div className="btn" onClick={inputNum}>6</div>
            <div className="btn-orange" onClick={operatorType}>+</div>

            <div className="btn" onClick={inputNum}>1</div>
            <div className="btn" onClick={inputNum}>2</div>
            <div className="btn" onClick={inputNum}>3</div>
            <div className="btn-orange" onClick={operatorType}>-</div>

            <div className="btn zero" onClick={inputNum}>0</div>
            <div className="btn key-dot" onClick={inputNum}>.</div>
            <div className="btn-orange" onClick={equals}>=</div>
        </div>
    )
}

export default Layout