const{sport, student} = require('../src/models/index');

let sportList = [
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
    opponent: 'Timer Wolves',
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
  }];



let studentList = [
  {
    studentID: '001',
    studentName: 'jacob',
    grade: 9,
    eligibility: true,
    studentSport: 'Baseball',
  }, {
    studentID: '002',
    studentName: 'Jill',
    grade: 10,
    eligibility: true,
    studentSport: 'Basketball',
  }, {
    studentID: '003',
    studentName: 'Ann',
    grade: 12,
    eligibility: true,
    studentSport: 'Baseball',
  }, {
    studentID: '004',
    studentName: 'Steve',
    grade: 11,
    eligibility: true,
    studentSport: 'Baseball',
  }, {
    studentID: '005',
    studentName: 'Jo',
    grade: 9,
    eligibility: true,
    studentSport: 'Football',
  }, {
    studentID: '006',
    studentName: 'Zoe',
    grade: 10,
    eligibility: true,
    studentSport: 'Soccer',
  }, {
    studentID: '007',
    studentName: 'Dan',
    grade: 11,
    eligibility: true,
    studentSport: 'Baseball',
  }, {
    studentID: '008',
    studentName: 'Bo',
    grade: 12,
    eligibility: true,
    studentSport: 'Football',
  }, {
    studentID: '009',
    studentName: 'Bob',
    grade: 9,
    eligibility: true,
    studentSport: 'Basketball',
  }, {
    studentID: '010',
    studentName: 'Jane',
    grade: 11,
    eligibility: true,
    studentSport: 'Baseball',
  }];

for (let i = 0; i < sportList.length; i++) {
  sport.create(sportList[i]);
}
for (let i = 0; i < studentList.length; i++) {
  student.create(studentList[i]);
}
