import React from 'react';

import SharkTank from './components/SharkTank/SharkTank';
import Graveyard from './components/Graveyard/Graveyard';

import studentsData from '../helpers/studentsData';

import './App.scss';

class App extends React.Component {
  state = {
    liveStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const liveStudents = studentsData.livingStudents();
    this.setState({ liveStudents });
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ deadStudents });
  }

  livingStudents = () => {
    const liveStudents = studentsData.livingStudents();
    this.setState({ liveStudents });
  }

  departedStudents = () => {
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ deadStudents });
  }

  killStudent = (studentId) => {
    studentsData.followTheLight(studentId);
    this.livingStudents();
    this.departedStudents();
  }

  render() {
    const { liveStudents, deadStudents } = this.state;

    return (
      <div className="App">
        <div>
          <SharkTank students={liveStudents} killStudent={this.killStudent} />
        </div>
        <div>
          <Graveyard students={deadStudents} />
        </div>
      </div>
    );
  }
}

export default App;
