import React, { useEffect } from 'react'
import { useFetchEmployeeData } from './EmployeeService'

export const Employee = () => {
    const res= useFetchEmployeeData();
    
      
    useEffect(() => {
        console.log(res.isLoading)
        console.log(res.data)      
        
    }, [res.isLoading])
    
    
  return (
    <div>

    <button onClick={()=>{res.refetch()}}>Fetch</button>

    </div>
  )
}
