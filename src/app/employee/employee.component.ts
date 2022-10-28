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

    createEmployee(){
        this.createdEmployee = "Employee with name "+this.employeeName+ " was created";
    }
    updateEmployeeName(event: Event){
        this.employeeName = (<HTMLInputElement>event.target).value;
    }
}