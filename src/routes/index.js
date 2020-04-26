import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import CoursesPage from '../components/CoursePage';
import Header from '../components/commons/Header'

const Routes = () => {
    return (
      <BrowserRouter>
        <Header />
        <Route component={HomePage} exact path="/" />
        <Route component={AboutPage} path="/about" />
        <Route component={CoursesPage} path="/course" />
      </BrowserRouter>
    );
    
}

export default Routes

