import { useState } from 'react'; 

const useCounter = (props: { count: number; }) => {
    const [count, setCount] = useState(props.count); 
    function increment() {
        setCount(count+1); 
    }
    function decrement() {
        setCount(count-1); 
    } 
    function reset() {
        setCount(0); 
    }
    return {
        count,
        increment, 
        decrement,
        reset
    }
};
export const Button = (props: { count: number; }) => {
    const {count, increment, decrement, reset} = useCounter({count: props.count})
    return (
        <>
            <p className="items-center">{ count} </p>
            <button onClick={increment}> 
                Increment
            </button> <br></br>
            <button onClick={decrement}> 
                Decrement
            </button><br></br>
            <button onClick={reset}>
                Reset
            </button>
        </>

    );
};