import PropTypes from 'prop-types';
import React from 'react';
import studentShape from '../../../helpers/propTypes/studentShape';
import DeadStudent from '../DeadStudent/DeadStudent';
import './Graveyard.scss';

class Graveyard extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;
    const tombstoneCards = students.map((student) => (
        <DeadStudent key={student.id} student={student} />
    ));

    return (
      <div className="graveyard">
        <h4>Graveyard</h4>
        <div className="dead-students">
          { tombstoneCards }
        </div>
      </div>
    );
  }
}

export default Graveyard;
