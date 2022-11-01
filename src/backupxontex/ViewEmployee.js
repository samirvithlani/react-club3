import React, { useContext } from 'react'
import { AppContext } from './context'

export const ViewEmployee = () => {
    const {employees,dispatchEmployeeData} = useContext(AppContext)
  return (
    <div>
        {
            employees.map(emp=>{
                return (
                    <ul>
                        <li>Id ={emp.id}</li>
                        <li>Name = {emp.name}</li>
                        <li>Email ={emp.email}</li>
                        <li>phone ={emp.phone}</li>
                        <li>
                            <button onClick={()=>dispatchEmployeeData('DELETE_EMPLOYEE',emp)}>Delete</button>
                        </li>
                    </ul>
                )
            })
        }

    </div>
  )
}
