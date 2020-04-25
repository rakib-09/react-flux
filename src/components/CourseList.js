import React from 'react'

const CourseList=(props) => {
    
    return (
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((e) => {
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
    )
}

export default CourseList