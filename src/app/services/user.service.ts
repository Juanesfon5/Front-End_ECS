import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  readonly endpoint = environment.urlBase;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public authenticate(user: Object) {
    console.log("Autenticando...");
    console.log(user);
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.httpClient
      .post(`${this.endpoint}ECS/Api/v1/user/login`, user, { headers })
     
  }
}
