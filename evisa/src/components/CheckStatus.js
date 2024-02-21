import React, { useState } from 'react'
import axios from 'axios'
function CheckStatus() {
  const [status,setStatus]= useState('check token number')
  const handleSearch = () =>{
   const id = document.getElementById('aid').value
    axios.post('http://localhost:8000/search',{id}).then((res)=>{
      var result = document.createElement('h1')
      setStatus(JSON.stringify(res.data))
      result.innerHTML = `Status : ${status}`
      document.body.appendChild(result)
    })
  }
  return (
    <div>
      <h1>Check Status of application</h1>
      <label htmlFor="applyid">Enter Application id </label>
      <input type="text" id='aid'/>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default CheckStatus
