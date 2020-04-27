import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import CoursesPage from '../components/CoursePage';
import Header from '../components/commons/Header'
import PageNotFound from '../components/PageNotFound'
import ManageCourse from '../components/ManageCourse';
import AddNewCourse from '../components/AddNewCourse';

const Routes = () => {
    return (
        <BrowserRouter>
            
        <Header />
        <Switch>
          <Route component={HomePage} exact path="/" />
          <Route component={AboutPage} path="/about" />
          <Route component={ManageCourse} path="/course/:slug" exact />
          <Route component={AddNewCourse} path="/course" exact />
          <Route component={CoursesPage} path="/courses" exact />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
    
}

export default Routes

