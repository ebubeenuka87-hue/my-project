import React, { useState } from 'react'

const Reg = () => {
    const [form, setForm] = useState({name:"", email:"", password:""})

    const submit = (e) => {
        e.preventDefault()
        
        localStorage.setItem("formData", JSON.stringify(form))
        // setForm()
        alert("registration succesful")

    }
  return (
     <form onSubmit={submit}>
        <input
        placeholder='enter your name'
         onChange={(e) => setForm({...form, name:e.target.value})} />
        <input 
        placeholder='enter your email'
        required
        onChange={(e) => setForm({...form,email:e.target.value})} />

        <input 
        placeholder='enter your password'
        required
        onChange={(e) => setForm({...form,password:e.target.value})} />
        
        
        <button>register</button>
    </form>
  )
}

export default Reg