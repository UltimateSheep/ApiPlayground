import React from 'react'
import ApiContent from './Components/ApiContent'
import './ApiList.css'


const ApiList = props => {
    const { list } = props

    const ApiElement = list.map((Api, index)=>{
        return <ApiContent key={index} title={Api.title} link={window.location.origin + Api.path}/>
    });
  return (
    <div className='ApiLists'>
      {ApiElement}
    </div>
  )
}

export default ApiList