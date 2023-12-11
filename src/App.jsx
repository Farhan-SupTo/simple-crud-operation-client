import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleSubmit = event =>{
  event.preventDefault()
  const form =event.target 
  const name =form.name.value 
  const email =form.email.value
  const user ={name,email}
  console.log(user)
  

  fetch('http://localhost:5000/users',{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.insertedId){
      alert('user added successfully')
      form.reset()
    }
  })
  }

  return (
    <>
      <h1>Simple CRUD Operation</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" id="" placeholder='Your name'/>
          <br />
          <input type="email" name="email" id="" placeholder='Your email'/>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>

    </>
  )
}

export default App
