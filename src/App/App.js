import React from 'react';

import SharkTank from './components/SharkTank/SharkTank';
import Graveyard from './components/Graveyard/Graveyard';

import studentsData from '../helpers/studentsData';

import './App.scss';

class App extends React.Component {
  state = {
    liveStudents: [],
  }

  componentDidMount() {
    const liveStudents = studentsData.livingStudents();
    this.setState({ liveStudents });
  }

  livingStudents = () => {
    const liveStudents = studentsData.livingStudents();
    this.setState({ liveStudents });
  }

  render() {
    const { liveStudents } = this.state;

    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <div className="shark-tank">
          <SharkTank students={liveStudents} />
        </div>
        <div className="graveyard">
          <Graveyard/>
        </div>
      </div>
    );
  }
}

export default App;
