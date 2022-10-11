import axios from "axios"
import { useMutation, useQuery } from "react-query"


function fetchUserData() {

    return axios.get('https://tutorialapi1.herokuapp.com/tutorial')
}


function addUserData(data) {

    console.log(data)
    return axios.post('https://reqres.in/api/users',data)
}

export const useAddData = () => {

        console.log("useAddData")
    return useMutation(addUserData,{
        onSuccess: () => {
            //fetch response here
            
        },
        onError: () => {
            //fetch error here if
        }
    })
}

export const useFetchData = () => {

    return useQuery('users',fetchUserData,{
    
        refetchOnMount:false,
        enabled:false,
        retry:7,
        retryDelay:4500,
        
        
    })
}