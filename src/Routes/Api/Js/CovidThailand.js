import React, {useEffect, useState} from 'react'
import '../css/CovidThailand.css'
import { Breadcrumb, BreadcrumbItem, Button } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import ApiObject from '../../../Components/ApiObject'

const CovidThailand = () => {

    const apiIndex = 0
    const link = 'covid-th'
    const apiContent = ApiObject[apiIndex].content.map((content, index)=>{
      return <BreadcrumbItem key={index} href={`${window.location.origin}/${link}${content.path}`}>{content.title}</BreadcrumbItem>
    })

  return (
    <div className='Covid-TH'>
        <h1>Covid Thailand API</h1>
        <Breadcrumb className='Api-Routes'>
         {apiContent}
        </Breadcrumb>
        <hr/>
        <Outlet/>
    </div>
  )
}

export default CovidThailand