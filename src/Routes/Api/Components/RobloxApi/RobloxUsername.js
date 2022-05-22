import React, { useEffect, useState } from 'react'
import { Alert, Button, Spinner, Toast } from 'react-bootstrap'
import axios from 'axios'

const RobloxUsername = () => {
    const [id, setId] = useState('')
    const [username, setUsername] = useState(null)
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        axios.get(`https://api.roblox.com/users/${id}`, {headers: {"Access-Control-Allow-Origin": "*"}} ).then((res) => {
            setLoading(true)
            setErr(null)
            setUsername((
            <div>
                <p className='Username'>Username: {res.Username}</p><br />
                <p className='Online'>Is online: {res.IsOnline}</p><br />
            </div>
            ))
        }).catch((error)=>{
            setErr(<Alert variant='danger'>{error.message}</Alert>)
        }).finally(() => setLoading(false))
    }
    return (
        <div className='RobloxUsername'>
            <Toast >
                <Toast.Header closeButton={false}>
                    <img src="https://api.roblox.com/Images/Logo/Favicon/favicon_48x48_11012018.ico" className="rounded me-2" alt="" />
                    <strong className="me-auto">Get Username</strong>
                    <small>/users/User-id</small>
                </Toast.Header>
                <Toast.Body>
                    <input type='text' placeholder='Player id' onChange={(e) => setId(e.target.value)} />
                    <hr />
                    <Button onClick={getData}>Search</Button>
                    <div className='result'>
                        <hr />
                        <Spinner animation="border" size="sm" hidden={!loading} />
                        <div className='data'>
                            {username}
                            {err}
                        </div>
                    </div>
                </Toast.Body>
            </Toast>
        </div>
    )
}

export default RobloxUsername
