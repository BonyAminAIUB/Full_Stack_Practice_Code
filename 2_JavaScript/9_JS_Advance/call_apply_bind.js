function calMarkAvg(chemisty, physics, ict){
    const avg = (this.bangla + this.english + this.math + chemisty + physics + ict) / 6;
    console.log(avg);
}

let student = {
    name : 'Bony',
    age : 24,
    bangla : 88,
    english : 85,
    math : 90,
};

// call
//calMarkAvg.call(student, 82, 94, 88);
console.log();

// apply
//calMarkAvg.apply(student, [83, 95, 89]);

//bind -> etake arekta funcion er vitor rakhte hobe (it return an instances)
let calMarkAvgBind = calMarkAvg.bind(student);
calMarkAvgBind(84, 92, 91);
// calMarkAvg.bind(student)(83, 95, 89);