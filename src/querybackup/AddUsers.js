import React from 'react'
import {useForm} from 'react-hook-form'
import { useAddUserData } from './UserService'

export const AddUsers = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const res = useAddUserData()
    
    const submit=(data)=>{

            var user = {
                "name":data.name,
                "email":data.email,
                "password":data.password,
                "gender":data.gender,
                "role":"633ee98cd95cabb6cfed51d6"
            }

            res.mutate(user)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="Enter Name" {...register("name",{required:true})}/>
            <input type="text" placeholder="password" {...register("password",{required:true})}/>
            <input type ="text" placeholder="Enter email" {...register("email",{required:true})}/>
            <input type ="text" placeholder="Enter gender" {...register("gender",{required:true})}/>


            <input type="submit" value="Submit"/>

        </form>

    </div>
  )
}

