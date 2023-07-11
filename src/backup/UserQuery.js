import axios from "axios"
import { useMutation, useQuery } from "react-query"

const getUserData = ()=>{

    return axios.get("https://node5.onrender.com/user/user")
}

export const useFetchUserData1 = ()=>{

    return useQuery('user',getUserData)
}

const addUserData = (data)=>{

    return axios.post("https://node5.onrender.com/user/user",data)
}
export const useAddUserData1 = ()=>{
    return useMutation(addUserData)
}