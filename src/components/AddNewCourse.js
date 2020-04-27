import React, { useState } from 'react'
import CourseForm from './CourseForm'

const AddNewCourse = props => {
    const [course, setCourse] = useState({
        id: null,
        title: null,
        authorId: null,
        slug: "",
        category: null
    })
    
    const handleChange = ({target}) => {
        setCourse({
          ...course,
          [target.name]: target.value,
        });
    }

    return (
      <>
        <h2>Add Course</h2>
        <CourseForm course={course} onChange={handleChange} />
      </>
    );
}

export default AddNewCourse