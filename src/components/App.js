import React from 'react'
import Routes from "../routes"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    // function getPage() {
    //     const route = window.location.pathname

    //     if(route == "/about") return <AboutPage />
    //     if(route == "/course") return <CoursesPage />
    //     return <HomePage />
    // }
    return (
        <>
        <ToastContainer autoClose={3000} />
        <Routes />
        </>
    );   
}

export default App