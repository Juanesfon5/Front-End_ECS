import { Component, OnInit } from "@angular/core";
import { AnalistService } from "../../services/analist.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router/";
import { CookieService } from "angular2-cookie/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login-analist",
  templateUrl: "./login-analist.component.html",
  styleUrls: ["./login-analist.component.scss"]
})
export class LoginAnalistComponent implements OnInit {
  constructor(
    private analistService: AnalistService,
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
    let AnalistCredential = { id: id, password: clave };
    console.log(AnalistCredential);
    this.loginAnalist(AnalistCredential);
  }

  analistCredential = {
    id: "7591517953",
    password: "X4SaGB"
  };
  ngOnInit() {}

  loginAnalist(AnalistCredential) {
    this.analistService
      .authenticateAnalist(AnalistCredential)
      .subscribe(data => {
        if (data["access_token"] != "null") {
          this.router.navigate(["/CensusMetrics"]);
          this.correctoLogin = true;
          localStorage.setItem("idAnalist", this.loginForm.get("id").value);
          this.setCookies("access_token", data["access_token"]);
          this.setCookies("refresh_token", data["refresh_token"]);
        } else {
          this.correctoLogin = false;
        }
      });
  }

  tokenRefreshAnalist() {
    this.analistService.tokenRefreshAnalist().subscribe(data => {
      console.log(data);
    });
  }

  getInfoAnalist(id) {
    this.analistService.getInfoAnalist(id).subscribe(data => {
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
