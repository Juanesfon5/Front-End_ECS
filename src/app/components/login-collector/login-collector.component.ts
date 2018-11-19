import { Component, OnInit } from "@angular/core";
import { CollectorService } from "../../services/collector.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router/";
import { CookieService } from "angular2-cookie/core";
// animacion de carga
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-login-collector",
  templateUrl: "./login-collector.component.html",
  styleUrls: ["./login-collector.component.scss"]
})
export class LoginCollectorComponent implements OnInit {
  constructor(
    private collectorService: CollectorService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private cookieService: CookieService
  ) {
    this.construirFormulario();
  }

  loginForm: FormGroup;
  correctoLogin: boolean;

  construirFormulario() {
    this.correctoLogin = true;
    this.loginForm = this.fb.group({
      id: [
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      clave: ["", Validators.compose([Validators.required])]
    });
  }

  submit() {
    this.spinner.show();

    let id = this.loginForm.get("id").value;
    let clave = this.loginForm.get("clave").value;
    let CollectorCredential = { id: id, password: clave };
    console.log(CollectorCredential);
    this.authenticateCollector(CollectorCredential);
  }

  ngOnInit() {}

  authenticateCollector(CollectorCredential) {
    this.collectorService
      .authenticateCollector(CollectorCredential)
      .subscribe(data => {
        if (data["access_token"] != "null") {
          this.router.navigate(["/codeManagement"]);
          this.correctoLogin = true;
          localStorage.setItem("idCollector", this.loginForm.get("id").value);
          this.setCookies("access_token", data["access_token"]);
          this.setCookies("refresh_token", data["refresh_token"]);
        } else {
          this.correctoLogin = false;
          this.spinner.hide();
        }
      });
  }
  tokenRefreshCollector() {
    this.collectorService.tokenRefreshCollector().subscribe(data => {
      console.log(data);
    });
  }
  getInfoCollector() {
    this.collectorService.getInfoCollector("1925650324").subscribe(data => {
      console.log(data);
    });
  }

  //Manejo de cookies
  setCookies(key, value) {
    this.cookieService.put(key, value);
  }

  getCookies(key) {
    return this.cookieService.get(key);
  }

  delCookies(key) {
    this.cookieService.remove(key);
  }
}
