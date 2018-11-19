import { Component, OnInit } from "@angular/core";
import { FormService } from "../../services/form.service";
import { CookieService } from "angular2-cookie/core";

import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private formServ: FormService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {}

  cerrarSesion() {
    localStorage.removeItem("ECN");
    localStorage.removeItem("CFN");
    this.cookieService.remove("access_token");
    this.cookieService.remove("refresh_token");
    this.router.navigate(["/"]);
  }
}
