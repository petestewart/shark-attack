const students = [
  {
    id: 'student1', firstName: 'Austin', lastName: 'Phy', avatar: 'https://avatars3.githubusercontent.com/u/39771100?v=4', isDead: false,
  }, {
    id: 'student2', firstName: 'Brooke', lastName: 'Nemchak', avatar: 'https://avatars3.githubusercontent.com/u/62910336?v=4', isDead: false,
  }, {
    id: 'student3', firstName: 'Gene', lastName: 'McNew', avatar: 'https://avatars1.githubusercontent.com/u/42584830?v=4', isDead: false,
  }, {
    id: 'student4', firstName: 'Gwynne', lastName: 'Meeks', avatar: 'https://avatars1.githubusercontent.com/u/63276406?v=4', isDead: false,
  }, {
    id: 'studen5', firstName: 'Jeanine', lastName: 'Beckle', avatar: 'https://avatars1.githubusercontent.com/u/62957170?v=4', isDead: false,
  }, {
    id: 'student6', firstName: 'Jeremiah', lastName: 'Vasquez', avatar: 'https://avatars1.githubusercontent.com/u/56455496?v=4', isDead: false,
  }, {
    id: 'studen7', firstName: 'Jim', lastName: 'Browning', avatar: 'https://avatars2.githubusercontent.com/u/62916291?v=4', isDead: false,
  }, {
    id: 'student8', firstName: 'Jonathan', lastName: 'Shearon', avatar: 'https://avatars3.githubusercontent.com/u/46360042?v=4', isDead: false,
  }, {
    id: 'student9', firstName: 'Joshua', lastName: 'Medlen', avatar: 'https://avatars0.githubusercontent.com/u/62913995?v=4', isDead: false,
  }, {
    id: 'student10', firstName: 'Kamiran', lastName: 'Ibrahim', avatar: 'https://avatars1.githubusercontent.com/u/20482946?v=4', isDead: false,
  },
  {
    id: 'student11', firstName: 'Mark', lastName: 'Young', avatar: 'https://avatars1.githubusercontent.com/u/62973018?v=4', isDead: false,
  },
  {
    id: 'student12', firstName: 'Matt', lastName: 'Logan', avatar: 'https://avatars1.githubusercontent.com/u/62910269?v=4', isDead: false,
  },
  {
    id: 'student13', firstName: 'Michael', lastName: 'Dotson', avatar: 'https://avatars3.githubusercontent.com/u/61854037?v=4', isDead: false,
  },
  {
    id: 'student14', firstName: 'Nate', lastName: 'Owens', avatar: 'https://avatars2.githubusercontent.com/u/62910227?v=4', isDead: false,
  },
  {
    id: 'student15', firstName: 'Nick', lastName: 'Walters', avatar: 'https://avatars3.githubusercontent.com/u/10491407?v=4', isDead: false,
  },
  {
    id: 'student16', firstName: 'Nikhil', lastName: 'Gaikwad', avatar: 'https://avatars1.githubusercontent.com/u/18632556?v=4', isDead: false,
  },
  {
    id: 'student17', firstName: 'Ola', lastName: 'Oladinni', avatar: 'https://avatars0.githubusercontent.com/u/59629698?v=4', isDead: false,
  },
  {
    id: 'student18', firstName: 'Pete', lastName: 'Stewart', avatar: 'https://avatars2.githubusercontent.com/u/62906411?v=4', isDead: false,
  },
  {
    id: 'student19', firstName: 'Phonesalo', lastName: 'Sihanorak', avatar: 'https://avatars0.githubusercontent.com/u/61893644?v=4', isDead: false,
  },
  {
    id: 'student20', firstName: 'Ryan', lastName: 'Beiden', avatar: 'https://avatars2.githubusercontent.com/u/25331401?v=4', isDead: false,
  },
  {
    id: 'student21', firstName: 'William', lastName: 'Campbell', avatar: 'https://avatars0.githubusercontent.com/u/62917622?v=4', isDead: false,
  },
];

const livingStudents = () => (students.filter((student) => student.isDead === false));

const dearlyBeloved = () => (students.filter((student) => student.isDead === true));

const followTheLight = (studentId) => {
  const i = students.findIndex((student) => student.id === studentId);
  students[i].isDead = true;
};

export default {
  livingStudents, dearlyBeloved, followTheLight,
};
