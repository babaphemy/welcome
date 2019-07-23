import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  selectedUser: Employee;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.employees = this.employeeService.getEmployees();
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmploye(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  onSelect(emp: Employee) {
    this.selectedUser = emp;
  }
  employeeDetails(id: number) {
    this.router.navigate(["details", id]);
  }
}
