import React, { useState } from 'react'
import { ReactDOM } from 'react';
import ListItem from './ListItem'
import './App.css';

function App() {
  const [itemList,setItemList]=useState('')
  const [item,setItem]=useState([])
  const itemEvent=(event)=>{
    setItemList(event.target.value)
  }
  const clickButton=(event)=>{
    setItem((oldData)=>{
      return [...oldData,itemList]
    })
    setItemList('')
  }

  return (
    <div className="App">
     <div className='center'>
     <>
    <br/>
    <h1>Todos List</h1>
    <br/>
    <input type="text" name="itemList" placeholder="Add items" onChange={itemEvent} value={itemList} />  
    <button onClick={clickButton}>+</button>  
     </>
    
     <ul >
     
    { item.map((data,index)=>{
      return (<ListItem key={index} text={data} />
        
        )
     })}
     </ul>
     </div>
     
    </div>
  );
}

export default App;
