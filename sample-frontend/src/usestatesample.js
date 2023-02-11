import { useState } from "react"

export const Fisrthook=()=>
{
  const[user,setuser]=useState("")

  const print=()=>
  {
    alert(user+'has added successfully')
  }
  const result=(temp)=>
  {
    setuser(temp.target.value)
  }

    return(
        <>
        <input type="text" placeholder="Enter Your Name"name={user} onChange={result}/>
        
        </>
    )
}