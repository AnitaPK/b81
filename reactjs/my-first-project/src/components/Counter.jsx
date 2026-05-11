import React, { useEffect, useMemo, useRef, useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(100)
    const [theme,setTheme] = useState('light')
    const prevValueCount = useRef()

function handleIncreament(){
    setCount((c)=>c+1)
}

const handleDecreament = ()=>{
    setCount(c=>c-1)
}
function handleThemeChange(){
    setTheme(prev => prev == 'light' ? 'dark' : 'light')
}

function expensiveCalculation(number){
    for(let i=0; i<=10;i++){}
    return number*number
}
const result = useMemo(()=>{
    return expensiveCalculation(count)
},[count])

useEffect(()=>{
    prevValueCount.current = count
},[count])

  return (
    <div style={{height:"400px"}}>
        
       <h1> Counter : {count}</h1>
       <h1>Previous Count : {prevValueCount.current}</h1>
       <h3>RESULT for expensive calculation : {result}</h3>

       <button onClick={()=>setCount(count+1)}>Increament</button>
       <button onClick={()=>setCount(count-1)}>Decreament</button>
        <button onClick={()=>setCount(100)}>Reset</button>
        <hr />
        <button onClick={handleIncreament}>Increament By Function</button>
        <button onClick={handleDecreament}>Decreament By Function</button>
        <hr />
        <button onClick={handleThemeChange}>{theme}</button>
        </div>
  )
}

export default Counter