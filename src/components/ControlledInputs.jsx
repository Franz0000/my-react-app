import React, { useState } from 'react';

const ControlledInputs = () => {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    const [user,setUser] = useState({
        name:'', email:'', password:''
    })
//alternative approach for single input
    // const handleNameChange = (e) =>{
    //     setName(e.target.value)
    // }
    // const handleEmailChange = (e) =>{
    //     setEmail(e.target.value)
    // }

    const handleSubmit = (e) =>{
        e.preventDefault()
        //do something
        setUser({
            name:'', email:'', password:''
        })
    }

    //for multiple inputs
    const handleChange = (e) =>{
        setUser({...user, [e.target.name]:e.target.value})

    }


    return (
        <form className='form' onSubmit={handleSubmit}>
            <h4>Controlled Inputs</h4>
            <div className='form-row'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input type="text" 
                id='name' 
                className='form-input' 
                value = {user.name} 
                onChange={handleChange}
                name='name'
                />
            </div>
            <div className='form-row'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input 
                type="email" 
                id='email' 
                className='form-input' value={user.email} 
                onChange={handleChange}
                name="email"/>
            </div>
            <div className='form-row'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input 
                type="password" 
                id='password' 
                className='form-input' value={user.password} 
                onChange={handleChange}
                name="password"
                />
            </div>
            <button type='submit' className='btn btn-block'>Submit</button>
        </form>
    );
};

export default ControlledInputs;