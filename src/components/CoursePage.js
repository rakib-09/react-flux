import React, { useState, useEffect } from 'react'
import { getCourses } from "../api/courseApi";

const CoursesPage = () => {
    const [courses, setCourses] = useState([])

    const allCourses = () => {
        getCourses().then((c) => {
          console.log(c);
          setCourses((prevArray) => [...prevArray, ...c]);
        });
    }

    useEffect(() => {
        allCourses()
    }, [])
    
    return (
      <>
        <h2>Course Page is Here</h2>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.title}</td>
                  <td>{e.authorId}</td>
                  <td>{e.category}</td>
                </tr>
              )
            })}
            
          </tbody>
        </table>
      </>
    );
}

export default CoursesPage