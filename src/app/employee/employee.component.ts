import { Component } from "@angular/core";

@Component({
    selector: 'employee-component',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})


export class EmployeeComponent{
    title: string = 'My app';
    employeeName: string = "";
    createdEmployee: string = "";
    displayEN: boolean = false;

    constructor(){
        this.displayEN = false;
    }

    createEmployee(){
        this.displayEN = true;
        this.createdEmployee = "Employee with name "+this.employeeName+ " was created";
    }
    erase(){
        this.displayEN = false;
    }
    
}