import React, { useEffect } from 'react'
import { useFetchUserData } from './UserService'

export const Users = () => {
    const res =  useFetchUserData()
    useEffect(() => {
      
        console.log(res.isLoading)
        if(res.data){
            console.log(res.data.data)
        }
        console.log(res.error)
    }, [res.isLoading])
    
    
  return (
    <div>

            {
                res.isLoading ? <h1>Loading...</h1> : <h1>DATA</h1>
            }
            <button onClick={()=>res.refetch()}>REFETCH</button>
    </div>
  )
}
