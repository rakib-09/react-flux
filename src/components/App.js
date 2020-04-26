import React from 'react'
import Header from './commons/Header'
import Routes from "../routes";

const App = () => {
    // function getPage() {
    //     const route = window.location.pathname

    //     if(route == "/about") return <AboutPage />
    //     if(route == "/course") return <CoursesPage />
    //     return <HomePage />
    // }
    return (
        <Routes>
          <Header> </Header>
        </Routes>
    );   
}

export default App