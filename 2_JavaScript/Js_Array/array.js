const team = [1, 5, 2, 8, 4];
const name = ['bony', 'amin', 'bony amin'];

const totalTeam = team.length;
console.log(totalTeam);
console.log(name[1]);

team.push(10);
console.log(team);

name.push('hello');
console.log(name);

team.pop();
console.log(team);

const v = [];
v.pop();
console.log(v);


const value = [1,2,3,4,5];
value.shift(); // remove first value
console.log(value);

value.unshift(10);  // add value in 1st position
console.log(value);

