import React, { useEffect, useState } from 'react'
import { Alert, Badge, Button, OverlayTrigger, Spinner, Toast, Tooltip } from 'react-bootstrap'
import ApiObject from '../../../../Components/ApiObject'
import axios from 'axios'

const TodayCovid = () => {
    const [covid, setCovid] = useState(<Spinner animation='border'/>)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all').then((res) => {
            setLoading(false)
            setError(null)
            console.log(res)
            const Content = ApiObject[0].content[0].allowed.map((allowedContent, index) => {
                return <p key={index}>{allowedContent.nick}: <Badge bg={allowedContent.color}>{res.data[0][allowedContent.title].toLocaleString("en-US")}</Badge></p>
            })
            setCovid(Content)
        }).catch(err => setError(<Alert variant='danger'>{err.message}</Alert>)).finally(() => setLoading(true))
    }, [])

    return (
        <div className='RobloxUsername'>

            <Toast >
                <Toast.Header closeButton={false}>
                    <OverlayTrigger overlay={<Tooltip>https://covid19.ddc.moph.go.th/api/Cases/today-cases-all</Tooltip>}>
                        <img src="https://covid19.ddc.moph.go.th/images/logo-ddc.png" className="rounded me-1" alt="" />
                    </OverlayTrigger>
                    <strong className="me-auto">Covid Today</strong>
                    <small>/api/Cases/today-cases-all</small>
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
