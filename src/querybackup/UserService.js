import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router-dom"


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

const addUserData = (data)=>{

    return axios.post("http://localhost:8000/users/user/",data)
}

export const useAddUserData = () =>{

        var navigate = useNavigate()
        return useMutation(addUserData,{
            onSuccess:(data)=>{
                console.log("res -->",data.data)
                navigate("/aboutus")
            },
            onError:(err)=>{
                console.log("error -->",err)
            }
        })


}