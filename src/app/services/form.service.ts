import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { HttpParamsOptions, HttpParams } from "@angular/common/http/src/params";

@Injectable({
  providedIn: "root"
})
export class FormService {
  readonly endpointCurrentEntity = environment.endpointCurrentEntity;
  readonly endpointFormConfirm = environment.endpointFormConfirm;
  readonly endpointFamliyIdentifiers = environment.endpointFamliyIdentifiers;
  readonly endpointFormFindSection = endpointFormFindSection;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public get_credenciales() {
    console.log("Consiguiendo...");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient
      .post(`${this.endpointCurrentEntity}`, {
        headers
      });
  }

  public confirmar_envio(credenciales: Object) {
    console.log("Consiguiendo...");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient
      .post(
        `${this.endpointFormConfirm}`,
        credenciales,
        {
          headers
        }
      );
  }

  public pedir_cedulas(credenciales: Object) {
    console.log("Consiguiendo...");
    let headers = new HttpHeaders();
    const httpParams: HttpParamsOptions =  {fromObject: credenciales} as HttpParamsOptions;
    headers = headers.append("Content-Type", "application/json");
    const params = {params: new HttpParams(httpParams), headers: headers};
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient
      .get(
        `${this.endpointFamliyIdentifiers}`,
          params
      );
  }

  public conseguir_seccion(credenciales: Object) {
    console.log("Consiguiendo...");
    let headers = new HttpHeaders();
    const httpParams: HttpParamsOptions =  {fromObject: credenciales} as HttpParamsOptions;
    headers = headers.append("Content-Type", "application/json");
    const params = {params: new HttpParams(httpParams), headers: headers};
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient
      .get(
        `${this.endpointFormFindSection}`,
          params
      );
  }
}
