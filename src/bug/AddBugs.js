import React from 'react'
import { ListBugs } from './ListBugs'

export const AddBugs = () => {
    var bugs = [
        {
            id: 1,
            title: 'Bug 1',
            description: 'Bug 1 description',
            status: 'New',
            isActive:true
        },
        {
            id: 2,
            title: 'Login issue',
            description: 'Login is not working',
            status: 'Pending',
            isActive:true
        },
        {
            id: 3,
            title: 'Signup Issue',
            description: 'Signup is not working',
            status: 'Old',
            isActive:false
        }
    ]
    const deleteBug =(bug)=>{
        bugs = bugs.filter(b=>b.id!==bug.id)
        
    }
  return (
    <div>

        <ListBugs bugs = {bugs} deleteBug = {deleteBug}/>
    </div>
  )
}
