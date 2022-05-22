import React from 'react'
import { Alert } from 'react-bootstrap'
import "./Doc.css"

const Doc = () => {
  return (
    <div className='Documentation'>
        <h1>Document is coming soon...</h1>
        <Alert variant='success' style={{maxWidth: "100"}}>Here, you will be able to learn to post your own api</Alert>
    </div>
  )
}

export default Doc