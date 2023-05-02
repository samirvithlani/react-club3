import axios from "axios"
import { useMutation, useQuery } from "react-query"

const fetchEmployeeData =()=>{

    return axios.get("https://reqres.in/api/users?delay=3")
}
export const useFetchEmployeeData = () =>{
    return useQuery("employee",fetchEmployeeData,{

        refetchOnMount:false,
        enabled:false,
        retry:15,
        retryDelay:10
    })
}

const addEmployeeData =(data)=>{

    console.log(data)
    return axios.post("https://reqres.in/api/users",data)

}

export const useAddEmployeeData = () =>{
    return useMutation(addEmployeeData,{
        onSuccess:(data)=>{
            //console.log(data.data)
        },
        onError:(error)=>{
            console.log(error)
        }
    })
}