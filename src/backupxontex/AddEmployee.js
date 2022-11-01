import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { AppContext } from './context'

export const AddEmployee = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const {dispatchEmployeeData}  = useContext(AppContext)

    const submit = (data)=>{
        dispatchEmployeeData('ADD_EMPLOYEE',data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
                <label>id</label>
                <input type="text" {...register('id')}/>
                <label>name</label>
                <input type="text" {...register('name')}/>
                <label>email</label>
                <input type="text" {...register('email')}/>
                <label>phone</label>
                <input type="text" {...register('phone')}/>
                <button type="submit">Add Employee</button>
        </form>

    </div>
  )
}
