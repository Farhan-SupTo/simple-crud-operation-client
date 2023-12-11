import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

const loadedUsers =useLoaderData()

const handleUpdate = event =>{
    event.preventDefault()
    const form =event.target
    const name =form.name.value
    const email =form.email.value
    const UpdatedUser={name,email}
    console.log( UpdatedUser)
    fetch(`http://localhost:5000/users/${loadedUsers._id}`,{
        method:'PUT',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( UpdatedUser),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
         if(data. modifiedCount > 0){
            alert('user updated successfully')
         }
    })
}

    return (
        <div>
            <h2>update information of {loadedUsers.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUsers?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUsers?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;