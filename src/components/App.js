import React from 'react'

import HomePage from './HomePage'
import AboutPage from './AboutPage'
import CoursesPage from './CoursePage'

const App = () => {
    function getPage() {
        const route = window.location.getPage

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