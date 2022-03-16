const numbers =[4,2,1,6,3,9,0,5];

// const sortNumbers=numbers.sort();
// console.log(sortNumbers);

const sortNumbers = numbers.reverse().sort();
console.log(sortNumbers);

const friends = ["kolom", "boi", "khata", "bicanan", "balish","zzzz"];
// const sortFriends =friends.sort();
// console.log(sortFriends);

// const sortFriends=friends.reverse();
// console.log(sortFriends);

const sortFriends=friends.sort().reverse();
console.log(sortFriends);

const students =[41,21,25,47,96,38,5,9,63];
const sortStudents=students.sort(function(a,b){
          return a-b;
}) ;
console.log(sortStudents);





