import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";
import { FormlyJsonschema } from "@ngx-formly/core/json-schema";
import { userInfo } from "os";
import { FormService } from '../../services/form.service';

@Component({
  selector: "app-form-section",
  templateUrl: "./form-section.component.html",
  styleUrls: ["./form-section.component.scss"]
})
export class FormSectionComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;
  response_login = {};

  constructor(
    private formServ: FormService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
  }

  confirmar_credenciales(){
    const credenciales = {};
    this.response_login = this.formServ.get_credenciales(credenciales);
    this.formServ.confirmar_envio(this.response_login);

  }

  
}
