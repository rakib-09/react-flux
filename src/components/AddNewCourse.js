import React, { useState } from 'react'
import CourseForm from './CourseForm'
import { saveCourse } from '../api/courseApi'
import { toast } from 'react-toastify'

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

    const handleSubmit = event => {
        event.preventDefault()
        saveCourse(course).then(() => {
            props.history.push('/courses')
            toast.success("New Course Added.")
        })
    }

    return (
      <>
        <h2>Add Course</h2>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
      </>
    );
}

export default AddNewCourse