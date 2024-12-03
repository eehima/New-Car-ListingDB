import { useState, useEffect } from "react"
import BButton from "../shared/BButton";

const Counter = () => {
    const styles = {
        button: {
            padding: "10px 20px",
            margin: " 0 5px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "blue",
            color: "white",
            fontSize: "16px"
        },
        h2: {
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "green"

        }
    }
    // create state instance for the data you want to keep track of
    // const [getter, setter] = useState(defaultValue);
    const [counterValue, setCounterValue] = useState(0);
    
    // handle increment
    const handleIncrement = () => {
        setCounterValue(counterValue + 1)
    }; 

    // handle decrement
    const handleDecrement = () => {
        if (counterValue === 0) {
            return;
        } else {
            setCounterValue(counterValue - 1)
        }
        
    };

    // handle reset
    const handleReset = () => {
        setCounterValue(0)
    };
// create a function that alert hello world using useEffect
    const callAlert = () => {
        console.log("Hello World")
    }
    // useEffect hook
    useEffect(() => {
        // call the function
        callAlert()
    }, [])
  return (
    <div>
        <h2 style={styles.h2}>Count: {counterValue}</h2>

        <button style={styles.button} onClick={handleIncrement}>Increment</button>
        <button style={styles.button} onClick={handleDecrement}>Decrement</button>
        <button style={styles.button} onClick={handleReset}>Reset</button>
        <div>
            <BButton bgColor="red">Login</BButton>
        </div>
        
    </div>
  )
}

export default Counter