import React, { useState } from 'react'
import './galchan.css'

export default function DoieChan() {
    const [texty,setTexty]=useState('')
    const [newy,setNewy]=useState([])

    const takeval=(e)=>{
        setTexty(e.target.value)
    }
    const workie=()=>{
        if(texty.trim() !== ''){
            let getit=[...newy,{text : texty , done : false}]
            setNewy(getit)
            setTexty('')
        }
    }
    const deltask=(index)=>{
        let filly = newy.filter((_,id)=>{
            return id != index
        })
        setNewy(filly)
    }
    const toggleDone = (index) => {
        const updated = newy.map((task, i) =>
            i === index ? { ...task, done: !task.done } : task
        )
        setNewy(updated)
    }
  return (
    <>
    <div className='container'>
      <h1>To-Do List</h1>
      <input type='text' placeholder='Enter a Task...' value={texty} onChange={takeval}/>
      <button className='add-btn' onClick={workie}>Add Task</button>
    </div>
    <div className='main'>
        {newy.map((ft,dex)=>(
            <div className='one' key={dex}>
            <span className={ft.done ? 'done' : ''}>
              {ft.text}
            </span>
                <button className='du-btn' onClick={() => toggleDone(dex)}>
                    {ft.done ? 'Undo' : 'Done'}
                </button>
                <button className='del-btn' onClick={()=>deltask(dex)}>Delete</button>
            </div>
        ))}
    </div>
    </>
  )
}
