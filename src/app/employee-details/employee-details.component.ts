import { Component, OnInit, Input } from "@angular/core";
import { Employee } from "../employee";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.scss"]
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() user: Employee;
  constructor() {}

  ngOnInit() {}
}
