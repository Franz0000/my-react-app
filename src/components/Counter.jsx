import React, { useState, useEffect } from 'react';
const Counter = () => {
    let [count, setCount] = useState(0)

    const handleCLick = () =>{
        setCount((currentState) =>{
            const newState = currentState + 1
            return newState
        }) 
        
        const sayHello = () =>{
            console.log("hello there")
        }

        sayHello()

        useEffect(() => {
            console.log("hello from useEffect")
        })

        // setTimeout(() =>{
        //     console.log("clicked button")
        //     setCount((currentState) =>{
        //         return currentState + 1
        //     })
        // },3000)

    }
    return (
    <>
            <h2>Hello</h2>
            <button type='button' className= 'btn'onClick={handleCLick }>add</button>
            <button type='button' className= 'btn 'onClick={() => setCount(count - 1) }>minus</button>
            <p>Value:{count}</p>
    </>
    );
};

export default Counter;