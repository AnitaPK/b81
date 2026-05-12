import React, { useCallback, useState } from 'react'

const Child = React.memo(({getFruits})=>{
    console.log("$$$$$$$$Child render$$$$$$$$$$$$")
    console.log("AKASH",getFruits)
    return(
        <h1>Child component</h1>
    )
})

const RerenderConcept = () => {
    const [count,setCount] = useState(0)

    const getFruits = useCallback(() => {
        return ["Apple", "Banana"]
    },[])

  return (
    <div style={{height:"90vh"}}>
        <Child getFruits={getFruits} />

        <button onClick={()=>setCount(count+1)}>Count : {count}</button>

        </div>
  )
}

export default RerenderConcept