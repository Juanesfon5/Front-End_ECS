import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { CookieService } from "angular2-cookie/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  /* 
    Aqui estan los servicios
    https://github.com/josearangos/ECS-Backend/issues/10
  
  */
  readonly endpointUserLogin = environment.endpointUserLogin;
  readonly endpointUserTokenRefresh = environment.endpointUserTokenRefresh;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

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

  public  tokenRefresh() {
    console.log("tokenRefresh...");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let refresh_token = this.cookieService.get("refresh_token");
    let Bacces = "Bearer " + refresh_token;
    headers = headers.append("Authorization", Bacces);
    return this.httpClient.post(
      `${this.endpointUserTokenRefresh}`,
      refresh_token,
      {
        headers
      }
    );
  }
}
