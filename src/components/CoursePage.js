import React, { useState, useEffect } from 'react'
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';
import { Link } from 'react-router-dom';

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
        <Link to="course">
          <button className="btn btn-primary">Add New Course</button>
        </Link>
        <CourseList courses={courses} />
      </>
    );
}

export default CoursesPage