import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { HttpParamsOptions } from "@angular/common/http/src/params";
import { CookieService } from "angular2-cookie/core";

@Injectable({
  providedIn: "root"
})
export class FormService {
  readonly endpointCurrentEntity = environment.endpointCurrentEntity;
  readonly endpointFormConfirm = environment.endpointFormConfirm;
  readonly endpointFamliyIdentifiers = environment.endpointFamliyIdentifiers;
  readonly endpointFormFindSection = environment.endpointFormFindSection;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

  public get_credenciales() {
    console.log("Consiguiendo...");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    let access_token = this.cookieService.get("access_token");
    
    // Llamaria al metodo tokenRefresh(refresh_token)

    let Bacces = "Bearer " + access_token;
    headers = headers.append("Authorization", Bacces);

    return this.httpClient.post(
      `${this.endpointCurrentEntity}`,
      { access_token: access_token },
      { headers }
    );
  }

  public confirmar_envio(credenciales: Object) {
    console.log("Consiguiendo...");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient.post(`${this.endpointFormConfirm}`, credenciales, {
      headers
    });
  }

  public pedir_cedulas(credenciales: Object) {
    console.log("Consiguiendo...");
    let headers = new HttpHeaders();
    const httpParams: HttpParamsOptions = {
      fromObject: credenciales
    } as HttpParamsOptions;
    headers = headers.append("Content-Type", "application/json");
    const params = { params: new HttpParams(httpParams), headers: headers };
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient.get(`${this.endpointFamliyIdentifiers}`, params);
  }

  public conseguir_seccion(credenciales: Object) {
    console.log("Consiguiendo...");
    let headers = new HttpHeaders();
    const httpParams: HttpParamsOptions = {
      fromObject: credenciales
    } as HttpParamsOptions;
    headers = headers.append("Content-Type", "application/json");
    const params = { params: new HttpParams(httpParams), headers: headers };
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient.get(`${this.endpointFormFindSection}`, params);
  }
}
