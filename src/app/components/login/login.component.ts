import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private userServices: UserService
  ) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      ECN: ["", Validators.required],
      CFN: ["", Validators.required]
    });
  }

  onSubmit() {
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
      console.log(data["access_token"]);
    });
    this.success = true;
  }
}
