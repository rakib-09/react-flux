import React from 'react'
import PropTypes from 'prop-types'

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

CourseList.prototypes = {
    //courses: PropTypes.array.isRequired
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        authorId: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired
    })).isRequired
}

CourseList.defaultProps = {
    courses: []
}

export default CourseList