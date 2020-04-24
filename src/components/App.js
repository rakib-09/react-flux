import React from 'react'

import HomePage from './HomePage'
import AboutPage from './AboutPage'
import CoursesPage from './CoursePage'
import Header from './commons/Header'

const App = () => {
    function getPage() {
        const route = window.location.pathname

        if(route == "/about") return <AboutPage />
        if(route == "/course") return <CoursesPage />
        return <HomePage />
    }
        return(
            <div className="container-fluid"> 
            <Header />
            {getPage()}
            </div>
        )   
}

export default App