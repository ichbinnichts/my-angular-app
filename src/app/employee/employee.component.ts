import { Component } from "@angular/core";

@Component({
    selector: 'employee-component',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})


export class EmployeeComponent{
    title: string = 'My app';
    employeesCreated: number = 0;

    createEmployee(){
        this.employeesCreated += 1;
    }
}