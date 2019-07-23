import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private baseUrl = "http://localhost:5071/";

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Basic YWRtaW5AZXNzbC5uZXQ6UGFzc3dvcmQyJA=="
    })
  };

  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/user/all`, this.httpOptions);
  }
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}api/user/one`);
  }
  deleteEmploye(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/user/delete/id`);
  }
  createEmployee(employee: Object): Observable<any> {
    return this.http.post(
      `${this.baseUrl}api/user/register`,
      employee,
      this.httpOptions
    );
  }
}
