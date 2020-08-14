import PropTypes from 'prop-types';
import React from 'react';
import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../../helpers/propTypes/studentShape';
import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const swimmerCards = students.map((swimmer) => (
        <LiveStudent key={swimmer.id} swimmer={swimmer} />
    ));
    return (

    <div class="shark-tank">
      { swimmerCards }
    </div>
    );
  }
}

export default SharkTank;
