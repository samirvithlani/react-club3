import axios from "axios"
import { useQuery } from "react-query"

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