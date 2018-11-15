import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    console.log("Test")
    this.router.navigate(["home"])
  }

}
