import { createContext, useState, useEffect} from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [ preState, setPreState ] = useState("");
    const [ curState, setCurState ] = useState("");
    const [ input, setInput ] = useState("0");
    const [ operator, setOperator ] = useState(null);
    const [ total, setTotal ] = useState(false);

  
    useEffect(() => {
      setInput(curState)
    }, [curState]);
  
    useEffect(()=>{
      setInput("0")
    },[]);

    const inputNum = e => {
    if(curState.includes(".") && e.target.innerText === ".") return

    if(total) {
        setPreState("")
    }

    curState 
        ? setCurState(prev => prev +  e.target.innerText) 
        : setCurState(e.target.innerText)
    setTotal(false)
    };

    const operatorType = e => {
    setTotal(false)
    setOperator(e.target.innerText)

    if(curState === "") return
    if(preState !== ""){
        equals()
    }else {
        setPreState(curState)
        setCurState("")
    }
    };

    const equals = e => {
    if(e?.target.innerText === "="){
        setTotal(true)
    };

    let com
    switch (operator) {
        case "/":
        com = String(parseFloat(preState) / parseFloat(curState)
        );
        break;
        case "+":
        com = String(parseFloat(preState) + parseFloat(curState)
        );
        break;
        case "x":
        com = String(parseFloat(preState) * parseFloat(curState)
        );
        break;
        case "-":
        com = String(parseFloat(preState) - parseFloat(curState)
        );
        break;
        default:
            return 
    }
    setInput("");
    setPreState(com);
    setCurState("")
    };

    const plusMinus = () => {
    if(curState.charAt(0) === "-") {
        setCurState(curState.substring(1));
    }else{
        setCurState("-" + curState)
    }
    };

    const percent = () => {
    preState 
    ? setCurState(String(parseFloat(curState) / 100) * preState)
    : setCurState(String(parseFloat(curState) / 100))
    };

    const reset = () => {
    setInput("0")
    setPreState("")
    setCurState("")
    };

    return (
        <DataContext.Provider value={{
            preState, setPreState,
            curState, setCurState,
            input, setInput,
            operator, setOperator,
            total, setTotal,
            inputNum, operatorType,
            equals, plusMinus,
            percent, reset
        }}>
            { children }
        </DataContext.Provider>    
    )
}

export default DataContext;