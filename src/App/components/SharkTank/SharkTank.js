import PropTypes from 'prop-types';
import React from 'react';
import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../../helpers/propTypes/studentShape';
import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  sharkAttackEvent = (e) => {
    e.preventDefault();
    const { students, killStudent } = this.props;
    const nextVictim = students[Math.floor(Math.random() * students.length)];
    killStudent(nextVictim.id);
  };

  render() {
    const { students } = this.props;
    const swimmerCards = students.map((swimmer) => (
        <LiveStudent key={swimmer.id} swimmer={swimmer} />
    ));

    return (
    <div>
      <div className="shark-tank">
        <h4>Shark Tank</h4>
        <div className="live-students">
          { swimmerCards }
        </div>
      </div>
      <div className="console">
        <button className="btn btn-danger" onClick={this.sharkAttackEvent}>SHARK ATTACK</button>
      </div>
    </div>
    );
  }
}

export default SharkTank;
