import React, {useEffect, useState} from 'react'
import '../css/RobloxApi.css'
import { Breadcrumb, BreadcrumbItem, Button } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import ApiObject from '../../../Components/ApiObject'

const RobloxApi = () => {
  // const [username, setUsername] = useState([])
  // const [usernameText, setUsernameText] = useState("")
  
  // //#region Getuser
  // const getUser = async ()=> {
  //   fetch(`https://api.roblox.com/users/${usernameText}`)
  // }
  const apiIndex = 0
  const apiContent = ApiObject[apiIndex].content.map((content, index)=>{
    return <BreadcrumbItem key={index} href={`roblox${content.path}`}>{content.title}</BreadcrumbItem>
  })


  return (
    <div className='Roblox-Api'>
        <h1>
            Welcome to roblox Api
        </h1><br/>
        <Breadcrumb className='Api-Routes'>
         {apiContent}
        </Breadcrumb>
      <Outlet/>
    </div>
  )
}

export default RobloxApi