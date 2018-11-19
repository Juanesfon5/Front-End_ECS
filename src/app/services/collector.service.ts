import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { CookieService } from "angular2-cookie/core";
import { HttpParamsOptions } from "@angular/common/http/src/params";

@Injectable({
  providedIn: "root"
})
export class CollectorService {
  readonly endpointCollectorLogin = environment.endpointCollectorLogin;
  readonly endpointCollectorInfo = environment.endpointCollectorInfo;
  readonly endpointCollectorTokenRefresh =
    environment.endpointCollectorTokenRefresh;
  readonly endpointShowCodes = environment.endpointShowCodes;
  readonly endpointDeliverCode = environment.endpointDeliverCode;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

  loggedIn() {
    if (localStorage.getItem("idCollector")) {
      return true;
    } else {
      return false;
    }
  }

  public authenticateCollector(CollectorCredential: Object) {
    console.log("Autenticando Collector...");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.httpClient.post(
      `${this.endpointCollectorLogin}`,
      CollectorCredential,
      {
        headers
      }
    );
  }

  public tokenRefreshCollector() {
    console.log("tokenRefresh...");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let refresh_token = this.cookieService.get("refresh_token");
    let Bacces = "Bearer " + refresh_token;
    headers = headers.append("Authorization", Bacces);
    return this.httpClient.post(
      `${this.endpointCollectorTokenRefresh}`,
      refresh_token,
      {
        headers
      }
    );
  }

  public getInfoCollector(id: any) {
    console.log("getInfoAnalist ");
    let headers = new HttpHeaders();
    const httpParams: HttpParamsOptions = {
      fromObject: { id: id }
    } as HttpParamsOptions;
    headers = headers.append("Content-Type", "application/json");
    const params = { params: new HttpParams(httpParams), headers: headers };
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient.get(`${this.endpointCollectorInfo}`, params);
  }

  public getCodesCollector(id: any) {
    console.log("getCodesCollector ");
    let headers = new HttpHeaders();
    const httpParams: HttpParamsOptions = {
      fromObject: { id: id }
    } as HttpParamsOptions;
    headers = headers.append("Content-Type", "application/json");
    const params = { params: new HttpParams(httpParams), headers: headers };
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient.get(`${this.endpointShowCodes}`, params);
  }

  public asignarCodigos(credenciales: Object) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');

    return this.httpClient.put(`${this.endpointDeliverCode}`, credenciales, {
      headers
    });
  }
}
