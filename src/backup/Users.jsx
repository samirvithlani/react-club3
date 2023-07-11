import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { useFetchUserData1 } from "./UserQuery";

export const Users = () => {
  const { isLoading, isError, data } = useFetchUserData1()
  const [users, setusers] = useState([]);
  useEffect(() => {
    console.log("data", data);
    console.log("isLoading", isLoading);
    console.log("isError", isError);
    if (data) {
      setusers(data.data.data);
    }
  }, [isLoading]);

  return (
    <div>
      <h1>ALL USERS</h1>
      <div>
        <Link to = "/backup/adduser">Add User</Link>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>
                <td>Name</td>
                <td>EMail</td>
                <td>Age</td>
                <td>STATUS</td>
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.isActive? "True" :"False"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
