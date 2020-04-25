import React, { useState, useEffect } from 'react'
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';

const CoursesPage = () => {
    const [courses, setCourses] = useState([])

    const allCourses = () => {
        getCourses().then((_courses) => {
          setCourses((prevArray) => [...prevArray, ..._courses]);
        });
    }

    useEffect(() => {
        allCourses()
    }, [])
    
    return (
      <>
        <h2>Course Page is Here</h2>
        <CourseList courses={courses}/>
      </>
    );
}

export default CoursesPage