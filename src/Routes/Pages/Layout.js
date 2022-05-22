import React, { useState, useCallback } from 'react'
import "./Layout.css"
import { Button } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
import PagesObject from '../../Components/PagesObject'

const PageElement = props => {
    const { path, title } = props
    return <Breadcrumb.Item href={window.location.origin + path}> {title}</Breadcrumb.Item>
}

const Layout = () => {
    // const [Page, setPage] = useState(0)

    const pageList = PagesObject.map((PageContent, index) => {
        return <PageElement index={index} path={PageContent.path} key={index} title={PageContent.title} />
    })
    return (
        <div className='Layout'>
            <div className='Routes'>
                <Breadcrumb>
                    {pageList}
                </Breadcrumb>
            </div>
            <hr />
            <div className='Main'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout