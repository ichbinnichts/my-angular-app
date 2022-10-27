import { Component } from "@angular/core";

@Component({
    selector: 'employee-component',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})


export class EmployeeComponent{
    title: string = 'My app';
    employeeName: string = "";

    updateEmployeeName(event: Event){
        this.employeeName = (<HTMLInputElement>event.target).value;
    }
}