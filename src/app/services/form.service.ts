import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class FormService {
  readonly endpointCurrentEntity = environment.endpointCurrentEntity;
  readonly endpointFormConfirm = environment.endpointFormConfirm;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public get_credenciales(credenciales: Object) {
    console.log("Consiguiendo...");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient
      .post(`${this.endpointCurrentEntity}`, {
        headers
      })
      .subscribe(data => {
        console.log(credenciales["ECN"]);
      });
  }

  public confirmar_envio(credenciales: Object) {
    console.log("Consiguiendo...");
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    //headers = headers.append('Authorization:Bearer ', 'ACCESSTOKEN');
    return this.httpClient
      .post(
        `${this.endpointFormConfirm}/ECS/Api/v1/form/confirm`,
        credenciales,
        {
          headers
        }
      )
      .subscribe(data => {});
  }
}
