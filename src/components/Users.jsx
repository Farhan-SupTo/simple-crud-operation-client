import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadedUsers =useLoaderData()
    const [users,setUsers] =useState(loadedUsers)

    const handleDelete = _id =>{
        console.log('Delete',_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.deletedCount > 0){
                alert('delete successfully')
                const remainingUser =users.filter(user=> user._id !== _id)
               setUsers(remainingUser)
           }
        })
    }

    return (
       
        <div>
             <h1>Total user :{users.length}</h1>
             {
                users.map(user=> <p key={user._id}> {user._id} : {user.name} : {user.email}
                <Link to={`/update/${user._id}`}><button>Update</button></Link>
                 <button onClick={() =>handleDelete(user._id)}>Delete</button> </p> )
            }
           
        </div>
    );
};

export default Users;