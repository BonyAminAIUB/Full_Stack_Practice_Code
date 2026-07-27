const university = {
    name : 'AIUB',
    address : 'Kuratoli khilkhet',
    students : 15000,
    events : ['21 Feb', 'Independence day', 'Victory day'],
    people : {
        counts : 200,
        Vice_Chancellor : {
            name : 'Dr. Saiful Islam',
            yearsOfExperience : 25,
            degree : 'BSc in EEE'
        }
    }
};

console.log(university.students);
console.log(university.people);
console.log(university.people.counts);
console.log(university.people.Vice_Chancellor.yearsOfExperience);
