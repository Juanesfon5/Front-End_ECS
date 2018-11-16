import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  /* 
    Aqui estan los servicios
    https://github.com/josearangos/ECS-Backend/issues/10
  
  */
  readonly endpointUserLogin = environment.endpointUserLogin;

  constructor(private httpClient: HttpClient, private router: Router) {}

  /* 
    Aqui estan los servicios
    https://github.com/josearangos/ECS-Backend/issues/10
  
  */
  public authenticate(user: Object) {
    console.log("Autenticando...");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.httpClient.post(`${this.endpointUserLogin}`, user, {
      headers
    });
  }

  /* 
    Aqui estan los servicios
    https://github.com/josearangos/ECS-Backend/issues/13
  
 

  public tokenRefresh(refresh_token: Object) {
    console.log("tokenRefresh...");
    console.log(refresh_token);
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.httpClient.post(
      `${this.endpoint}ECS/Api/v1/user/tokenRefresh`,
      refresh_token,
      {
        headers
      }
    );
  }
   */
}
