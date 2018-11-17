import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";
import { FormlyJsonschema } from "@ngx-formly/core/json-schema";
import { FormService } from "../../services/form.service";

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

  constructor(private formServ: FormService) {}

  ngOnInit() {
    this.formServ.get_credenciales().subscribe(data => {
      this.response_login = data;
      console.log("ya lo tengo");
      console.log(data);
    });
    //this.conseguir_cedulas();
  }

  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
  }

  confirmar_credenciales() {
    this.formServ.confirmar_envio(this.response_login).subscribe(data => {
      console.log(data);
    });
  }

  conseguir_cedulas() {
    this.formServ.pedir_cedulas(this.response_login).subscribe(data => {
      console.log(data);
    });
  }

  conseguir_seccion() {
    const usr = this.formServ
      .conseguir_seccion(this.response_login)
      .subscribe(data => {
        console.log(data);
      });
  }
}
