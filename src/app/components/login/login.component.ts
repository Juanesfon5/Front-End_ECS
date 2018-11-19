import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { CookieService } from "angular2-cookie/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;
  token;
  correctoLogin;
  constructor(
    private formBuilder: FormBuilder,
    private userServices: UserService,
    private cookieService: CookieService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    console.log(localStorage.getItem("ECN"));
    this.messageForm = this.formBuilder.group({
      ECN: ["", Validators.required],
      CFN: ["", Validators.required]
    });
  }

  onSubmit() {
    this.spinner.show();
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }

    const user = {};
    for (var key in this.messageForm.controls) {
      if (this.messageForm.controls.hasOwnProperty(key)) {
        user[key] = this.messageForm.controls[key].value;
      }
    }
    this.userServices.authenticate(user).subscribe(data => {
      if (data["access_token"] == "null") {
        this.spinner.hide();
        this.success = false;
        this.correctoLogin = false;
      } else {
        this.correctoLogin = true;
        this.setCookies("access_token", data["access_token"]);
        this.setCookies("refresh_token", data["refresh_token"]);
        localStorage.setItem("ECN", user["ECN"]);
        localStorage.setItem("CFN", user["CFN"]);
        this.router.navigate(["../home"]);
      }
    });
    this.submitted = true;
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
