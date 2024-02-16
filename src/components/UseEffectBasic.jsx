import React, { useState, useEffect } from 'react';

const UseEffectBasic = () => {
    let [value, setValue] = useState(0)
    
    const sayHello = () => {
        console.log("Hello There")
    };
        
    sayHello()
        

    useEffect(() => {
        console.log("hello from useEffect")
    },[]);

    return (
    <>
            <h2>value : {value}</h2>
            <button type='button' className= 'btn'onClick={ () => setValue(value + 1)}>add</button>
    </>
    );
};

export default UseEffectBasic;