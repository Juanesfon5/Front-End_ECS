import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { CookieService } from "angular2-cookie/core";
import { HttpParamsOptions } from "@angular/common/http/src/params";

@Injectable({
  providedIn: "root"
})
export class AnalistService {
  readonly endpointAnalistLogin = environment.endpointAnalistLogin;
  readonly endpointAnalistInfo = environment.endpointAnalistInfo;
  readonly endpointShowStatistics = environment.endpointShowStatistics;
  readonly endpointAnalistTokenRefresh =
    environment.endpointAnalistTokenRefresh;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

  public authenticateAnalist(analistCredential: Object) {
    console.log("Autenticando...");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.httpClient.post(
      `${this.endpointAnalistLogin}`,
      analistCredential,
      {
        headers
      }
    );
  }

  public tokenRefreshAnalist() {
    console.log("tokenRefresh...");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let refresh_token = this.cookieService.get("refresh_token");
    let Bacces = "Bearer " + refresh_token;
    headers = headers.append("Authorization", Bacces);
    return this.httpClient.post(
      `${this.endpointAnalistTokenRefresh}`,
      refresh_token,
      {
        headers
      }
    );
  }

  public getInfoAnalist(id: any) {
    console.log("getInfoAnalist ");
    let headers = new HttpHeaders();
    const httpParams: HttpParamsOptions = {
      fromObject: id
    } as HttpParamsOptions;
    headers = headers.append("Content-Type", "application/json");
    const params = { params: new HttpParams(httpParams), headers: headers };
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient.get(`${this.endpointAnalistInfo}`, params);
  }

  public getStatistics() {
    console.log("getStatistics ");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    const params = { headers: headers };
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient.get(`${this.endpointShowStatistics}`, params);
  }
} 
