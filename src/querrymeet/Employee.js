import React, { useEffect } from 'react'
import { useAddEmployeeData, useFetchEmployeeData } from './EmployeeService'

export const Employee = () => {
    const res= useFetchEmployeeData();
    const mutex = useAddEmployeeData();
    
    
      
    useEffect(() => {
        // console.log(res.isLoading)
        // console.log(res.data)      
        console.log("data",mutex.data)
        console.log("loading",mutex.isLoading)
        console.log("idle",mutex.isIdle)
        
        
    }, [res.isLoading,mutex.isLoading])

    const submmit =()=>{

        mutex.mutate({name:"sachin",job:"developer"})
    }
    
    
  return (
    <div>

      <button onClick={()=>{res.refetch()}}>Fetch</button>
      <button onClick={()=>{submmit()}}>Submit</button>
    </div>
  )
}
