import React from 'react'
import { Button } from 'react-bootstrap'
const ApiContent = (props) => {
    const {title, link} = props
  return (
    <div className='api-content'>
        <Button href={link} variant='info'>{title}</Button>
    </div>
  )
}

export default ApiContent