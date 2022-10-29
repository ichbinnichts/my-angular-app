import { Component } from "@angular/core";

/**
 * 
 * @AUTHOR - Nathan Víctor de Faria
 * 
 */

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
    devOps: string = "";

    constructor(){
        this.displayEN = false;
    }

    createEmployee(){
        this.displayEN = true;
        this.createdEmployee = "Employee with name "+this.employeeName+ " was created";
        this.devOps = Math.random() > 0.5 ? 'sim' : 'nao'
    }
    erase(){
        this.displayEN = false;
    }
    getStatusColor(){
        return this.devOps == 'sim' ? 'green' : 'red';
    }
    
}