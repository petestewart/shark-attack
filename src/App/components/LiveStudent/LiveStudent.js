import React from 'react';
import './LiveStudent.scss';
// import studentShape from '../../../helpers/propTypes/studentShape';

class LiveStudent extends React.Component {
  render() {
    const student = this.props.swimmer;

    return (
      <div className="card student-card">
        <div className="card-body">
          <h5 className="card-title">{student.firstName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text"><img src={student.avatar} alt="avatar" /></p>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
