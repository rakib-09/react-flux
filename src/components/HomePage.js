import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
   return( 
   <div className="jumboTron">
        <h1>Plural-sight Administration</h1>
        <p>React, Flux, React router for exclusive web application</p>
        <Link to="about" className="btn btn-primary m-10">About</Link>
        <Link to="course" className="btn btn-primary m-10">Courses</Link>
    </div>
   )  
}


export default HomePage