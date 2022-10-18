const{sport, student} = require('../src/models/index');

let sportSeed = () => {
  sport.create(
    {
      sport: 'Football',
      date: '11-01-22',
      time: '10:00',
      opponent: 'Highland Huskies',
      location: 'Riverside, IA',
    },{
      sport: 'Football',
      date: '12-02-22',
      time: '15:00',
      opponent: 'Timerwolves',
      location: 'Riverbay, AK',
    },{
      sport: 'Baseball',
      date: '10-06-22',
      time: '12:00',
      opponent: 'Pekin Bulldogs',
      location: 'Chicago, IL',
    },{
      sport: 'Baseball',
      date: '10-19-22',
      time: '08:00',
      opponent: 'Angels',
      location: 'Goose Creek, SC',
    },{
      sport: 'Basketball',
      date: '10-22-22',
      time: '8:00',
      opponent: 'City High Little Hawks',
      location: 'Cedar Rapids, IA',
    },{
      sport: 'Basketball',
      date: '11-22-22',
      time: '7:30',
      opponent: 'Liberty Lightening',
      location: 'North Liberty, IA',
    },{
      sport: 'Soccer',
      date: '08-30-22',
      time: '01:00',
      opponent: 'Manteca Rangers',
      location: 'Monmmoth, Il',
    },{
      sport: 'Soccer',
      date: '10-06-22',
      time: '12:00',
      opponent: 'Pekin Bulldogs',
      location: 'Chicago, Il',
    });};

let studentSeed = () => {
  student.create(
    {
      studentID: '001',
      name: 'jacob',
      grade: 9,
      eligibility: true,
      sport: 'Baseball',
    }, {
      studentID: '002',
      name: 'Jill',
      grade: 10,
      eligibility: true,
      sport: 'Basketball',
    }, {
      studentID: '003',
      name: 'Ann',
      grade: 12,
      eligibility: true,
      sport: 'Baseball',
    }, {
      studentID: '004',
      name: 'Steve',
      grade: 11,
      eligibility: true,
      sport: 'Baseball',
    }, {
      studentID: '005',
      name: 'Jo',
      grade: 9,
      eligibility: true,
      sport: 'Football',
    }, {
      studentID: '006',
      name: 'Zoe',
      grade: 10,
      eligibility: true,
      sport: 'Soccer',
    }, {
      studentID: '007',
      name: 'Dan',
      grade: 11,
      eligibility: true,
      sport: 'Baseball',
    }, {
      studentID: '008',
      name: 'Bo',
      grade: 12,
      eligibility: true,
      sport: 'Football',
    }, {
      studentID: '009',
      name: 'Bob',
      grade: 9,
      eligibility: true,
      sport: 'Basketball',
    }, {
      studentID: '010',
      name: 'Jane',
      grade: 11,
      eligibility: true,
      sport: 'Baseball',
    });};



module.exports ={sportSeed, studentSeed};

