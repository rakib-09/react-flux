import React from "react"
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <>
            <h2>Page Not found</h2>    
            <Link to="/">Back To Home</Link>
        </>
    )
}

export default PageNotFound