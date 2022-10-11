import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useAddData, useFetchData } from './UserService'

export const UserComponent = () => {

    const res= useFetchData()
    const mutext = useAddData()
    // useEffect(() => {
    //     console.log("loading",res.isLoading)
    //     console.log("data",res.data)
    //     console.log("error",res.error)
    // }, [res.isLoading])

    useEffect(() => {
      
     // fetchData()
      
    }, [res.isLoading])
    
    const fetchData = () =>{
      res.refetch()
      console.log(res.data)
    }

    const submit= ()=>{
      console.log("submit")
      mutext.mutate({name:"sachin",job:"developer"})
    }

  return (
    <div>

            <button onClick={()=>fetchData()}>Fetch Data</button>
            {
                res.isLoading && <CircularProgress/>

            }
            <button onClick={()=>submit()}>Submit</button>

           
            
    </div>
  )
}
