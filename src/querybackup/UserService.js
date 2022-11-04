import axios from "axios"
import { useQuery } from "react-query"

const fetchUserDta = ()=>{
    return axios.get("http://localhost:8000/users/user/")
}

export const useFetchUserData = () =>{
    return useQuery("users",fetchUserDta,{
        retry:7,
        retryDelay:10,
        refetchOnMount:false,
        enabled:false,
    })
}