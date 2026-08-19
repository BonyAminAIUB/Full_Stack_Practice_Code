interface Employee {
    name : string;
    id : number;
    department : string;
    salary? : number;
}


const bony : Employee = {
    name : 'Bony',
    id : 101,
    department : 'CSE',
    salary : 50000
}

const amin : Employee = {
    name : 'Amin',
    id : 102,
    department : 'CSE',
}


const team : Employee[] = [bony, amin, {
    name : 'Bony Amin',
    id : 103,
    department : 'CSE'
}]; 

function printEmployeeDetails(employee : Employee):void{
    console.log(`Name: ${employee.name}`);
    console.log(`Id: ${employee.id}`);
    console.log(`Department: ${employee.department}`);
    if(employee.salary == undefined){
        employee.salary = 10000;
    }
    console.log(`Salary: ${employee.salary}`);
}

printEmployeeDetails(bony);


function displayEmployeedetails({name, id, department, salary}:Employee):void{

}