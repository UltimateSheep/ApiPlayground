import React, { useEffect, useState } from 'react'
import { Alert, Badge, Button, OverlayTrigger, Spinner, Toast, Tooltip } from 'react-bootstrap'
import ApiObject from '../../../../Components/ApiObject'
import axios from 'axios'
import '../../css/CovidThailand.css'

const TodayCovidProvinces = () => {
    const [covid, setCovid] = useState(<Spinner animation='border' />)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces').then((res) => {
            setLoading(false)
            setError(null)
            console.log(res)
            const FinalMap = res.data.map((resContent, i) => {
                const Content = ApiObject[0].content[1].allowed.map((allowedContent, index) => {
                    return <p key={index}>{allowedContent.nick}: <Badge bg={allowedContent.color}>{isNaN(resContent[allowedContent.title]) ? resContent[allowedContent.title] : resContent[allowedContent.title].toLocaleString("en-US")}</Badge></p>
                })

                return (
                    <Toast  key={i}>
                        <Toast.Header closeButton={false}>
                            <OverlayTrigger overlay={<Tooltip>https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces</Tooltip>}>
                                <img src="https://covid19.ddc.moph.go.th/images/logo-ddc.png" className="rounded me-1" alt="" />
                            </OverlayTrigger>
                            <strong className="me-auto">Covid Today</strong>
                            <small>/api/Cases/today-cases-by-provinces</small>
                        </Toast.Header>
                        <Toast.Body>
                            {Content}
                        </Toast.Body>
                    </Toast>
                )
            });
            setCovid(FinalMap)
        }).catch(err => {
            setError(<Alert variant='danger'>{err.message}</Alert>)
            console.error(err);
        }).finally(() => setLoading(true))
    }, [])
    return (
        <div className='Today-Provinces'>
            {error}
            <div className='Toast-container'>
                {covid}
            </div>
        </div>
    )
}


export default TodayCovidProvinces