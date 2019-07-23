import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";

const routes: Routes = [
  { path: "add-member", component: CreateEmployeeComponent },
  { path: "members", component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
