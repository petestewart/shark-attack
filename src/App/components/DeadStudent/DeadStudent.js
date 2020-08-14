import React from 'react';
import './DeadStudent.scss';

class DeadStudent extends React.Component {
  render() {
    const { student } = this.props;

    return (
      <div className="card tombstone-card">
        <div className="card-body">
          <h5 className="card-title">{student.firstName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text"><img src={student.avatar} alt="avatar" /></p>
        </div>
      </div>
    );
  }
}

export default DeadStudent;
