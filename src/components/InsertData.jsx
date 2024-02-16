import React from 'react';
import { useState } from 'react';
import { data } from '../data';
const InsertData = () => {
    const [persons, setPersons] = useState(data)

    const removeItem = (id) =>{
        const newPersons = persons.filter((person)=> person.id !== id )
        setPersons(newPersons)
    }

    const clearItems = () =>{
        setPersons([])
    }

    return (
        <div>
            {persons.map((person)=> {
                const {id,name} = person
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button type='button' onClick = {() => removeItem(id)}>remove</button>
                        <button type='button' className='btn' onClick = {clearItems}>clear items</button>
                    </div>
                )
            })}
        </div>
    );
};

export default InsertData;