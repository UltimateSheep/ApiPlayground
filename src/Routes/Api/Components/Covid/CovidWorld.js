import React, { useEffect, useState } from 'react'
import { Alert, Badge, Button, OverlayTrigger, Spinner, Toast, Tooltip } from 'react-bootstrap'
import ApiObject from '../../../../Components/ApiObject'
import axios from 'axios'

const TodayCovid = () => {
    const [covid, setCovid] = useState(<Spinner animation='border'/>)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get('https://corona.lmao.ninja/v2/all').then((res) => {
            setLoading(false)
            setError(null)
            console.log(res)
            const Content = ApiObject[1].content[0].allowed.map((allowedContent, index) => {
                return <p key={index}>{allowedContent.nick}: <Badge bg={allowedContent.color}>{res.data[allowedContent.title].toLocaleString("en-US")}</Badge></p>
            })
            setCovid(Content)
        }).catch(err => setError(<Alert variant='danger'>{err.message}</Alert>)).finally(() => setLoading(true))
    }, [])

    return (
        <div className='RobloxUsername'>

            <Toast >
                <Toast.Header closeButton={false}>
                    <OverlayTrigger overlay={<Tooltip>https://corona.lmao.ninja/v2/all</Tooltip>}>
                        <img src="" className="rounded me-1 xl" alt="" />
                    </OverlayTrigger>
                    <strong className="me-auto">Covid Today</strong>
                    <small>/v2/all</small>
                </Toast.Header>
                <Toast.Body>
                    
                    {covid}<br />
                    {error}
                </Toast.Body>
            </Toast>

        </div>
    )
}

export default TodayCovid
