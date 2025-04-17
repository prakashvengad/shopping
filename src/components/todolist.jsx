import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const TodoList = () => {

    const [items, setItems] = useState("");
    const [value, setValue] = useState([]);

    const handleChange = (e) => {
        setItems(e.target.value);

    }

    const handleclick = () => {
        setValue([...value, items]);
        setItems("");
    }

    useEffect(() => {
        console.log("Checking");
    })

  return (
    <>
    <center>
    <div className='border'>
    <div>
        <center><h2>Todo List Items</h2></center>
    </div>
    <div>
        <center>
        <input type='text' className='inputtag' placeholder='Enter the list of items todo' onChange={handleChange} value={items}/><br/>
        <Button  variant="primary" className='button' onClick={handleclick}> + </Button>
        </center>
    </div>
    <div>
        <center>
            <h2>The list of Items</h2>
        </center>
        <div>
            <center className='ans'>
           <ul className='emoge'>
            {
               value.map((x) => (
                <li>{x}</li>
               ))
            }
           </ul>
            </center>
        </div>
    </div>
    </div>
    </center>
    </>
  )
}

export default TodoList