"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bony = {
    name: 'Bony',
    id: 101,
    department: 'CSE',
    salary: 50000
};
const amin = {
    name: 'Amin',
    id: 102,
    department: 'CSE',
};
const team = [bony, amin, {
        name: 'Bony Amin',
        id: 103,
        department: 'CSE'
    }];
function printEmployeeDetails(employee) {
    console.log(`Name: ${employee.name}`);
    console.log(`Id: ${employee.id}`);
    console.log(`Department: ${employee.department}`);
    if (employee.salary == undefined) {
        employee.salary = 10000;
    }
    console.log(`Salary: ${employee.salary}`);
}
printEmployeeDetails(bony);
function displayEmployeedetails({ name, id, department, salary }) {
}
//# sourceMappingURL=interface.js.map