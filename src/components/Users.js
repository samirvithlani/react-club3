import React from 'react'

export const Users = () => {
    var users = [
        {
            name:"jay",
            age:20,
            location:"bangalore"
        },
        {
            name:"yash",
            age:25,
            location:"Pune"
        },
        {
            name:"Escobar",
            age:45,
            location:"Maxico"
        }
    ]
  return (
    <div>
        
            {
                users.map((user)=>{
                    return(
                        <ul>
                            <li>{user.name}</li>
                        </ul>
                    )
                })
            }
        
            
    </div>
  )
}
