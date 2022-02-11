import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios'
import { axios, url } from "../component/axios";
function Home() {
  const [users, setUser] = useState([]);

  useEffect(() => {
  getUsers()
  }, []);
  const getUsers = async() => {
    const result = await axios.get(`${url}/users`)
    setUser(result.data.reverse())
    
  }
  const deleteUser = async(id) => {
   await  axios.delete(`${url}/users/${id}`)
   getUsers()
  }
  

  return (
    <div className="root">
        <h1 className=" py-2">Users List</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <Link type="button" to={`/updatepage/${user.id}`} class="btn btn-primary mx-2 my-2">
                  Update
                </Link>

                <Link type="button" to={`/view/${user.id}`} class="btn btn-secondary mx-2">
                  View
                </Link>
                <button type="button" onClick={()=>{deleteUser(user.id)}} class="btn btn-danger mx-2">
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
