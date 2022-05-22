import axios from 'axios'
import React, { useState } from 'react'
import { Alert, Badge, Button, FloatingLabel, Form, Spinner, Toast, ToastContainer } from 'react-bootstrap'
import ApiObject from '../../../../Components/ApiObject'

function CovidSearch() {
    const [search, setSearch] = useState('')
    const [state, setState] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleSearch = async () => {
        setState(<Spinner animation='border' />)
        axios.get(`https://corona.lmao.ninja/v2/states/${search}`, {headers: {"Access-Control-Allow-Origin": "*"}}).then(res => {
            setLoading(false)
            console.log(res)
            const Content = ApiObject[1].content[2].allowed.map((allowedContent, index) => {
                return (
                    res.status === 200 ?
                        <p key={index}>{allowedContent.nick}: <Badge bg={allowedContent.color}>{res.data[allowedContent.title].toLocaleString("en-US")}</Badge></p>
                        : setState(<Alert variant='danger'>{res.data["message"]}</Alert>)
                )
            })
            setState(Content)

        }).catch(e => {setState(<Alert variant='danger'>{e["message"]}</Alert>);})
    }

    return (
        <div className='Covid-search align-center'>

            <ToastContainer className="p-3">
                <Toast>
                    <Toast.Header closeButton={false}>
                        <img
                            src=""
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="State"
                                className="mb-1"
                            >
                                <Form.Control type="text" placeholder="New York" onChange={e => setSearch(e.target.value)} />
                            </FloatingLabel></strong>
                        <small><Button value="Search" variant='success' onClick={handleSearch} disabled={loading}>Search</Button></small>
                    </Toast.Header>
                    <Toast.Body>{state}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}

export default CovidSearch