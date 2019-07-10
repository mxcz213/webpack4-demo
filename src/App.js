import React, { useState, useEffect, useReducer } from 'react'
import { Button } from 'antd'
import './css/main'

function countReducer(state, action){
    switch(action.type){
        case 'add':
            return state + 1
        case 'minus': 
            return state - 1
        default:
            return state
    }
}

export default function Example() {
    //const [ count, setCount ] = useState(0)
    const [count, dispatchCount] = useReducer(countReducer, 0)
    const [name, setName] = useState('jophn')

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         //setCount(count + 1)
    //         dispatchCount({type: 'add'})
    //     },1000)
    //     return () => clearInterval(interval)
    // }, [])
    useEffect(() => {
        console.log('effect invoked')
        return () => console.log('effect deteched')
    }, [])

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => dispatchCount({type: 'add'})}>{count}</button>
            <p>123456</p>
        </div>
    )
}