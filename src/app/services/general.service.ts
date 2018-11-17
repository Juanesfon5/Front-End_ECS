import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { HttpParamsOptions } from "@angular/common/http/src/params";
import { CookieService } from "angular2-cookie/core";

@Injectable({
  providedIn: "root"
})
export class GeneralService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}
  readonly endpointCurrentEntity = environment.endpointCurrentEntity;

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
}
