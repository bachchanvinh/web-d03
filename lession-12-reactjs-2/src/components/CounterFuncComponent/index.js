import React,{useState} from 'react'
import './style.css'

function CounterFuncComponent(){
const [count,setCount]=useState(0)

return (
            <div className="counter">
                <button onClick={() => setCount(count-1)}>-1</button>
                <h2>{count}</h2>    
                <button onClick={() => setCount(count+1)}>+1</button>
            </div>
        )
}

export default CounterFuncComponent