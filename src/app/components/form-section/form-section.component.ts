import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";
import { FormlyJsonschema } from "@ngx-formly/core/json-schema";
import { FormService } from "../../services/form.service";
import { GeneralService} from "../../services/general.service";

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

  constructor(private formServ: FormService, private generalService: GeneralService) {}

  ngOnInit() {
    this.response_login = {
      "ECN": localStorage.getItem("ECN"),
      "CFN": localStorage.getItem("CFN")
    };
    //this.conseguir_cedulas();
    this.conseguir_seccion(1);
  }

  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
  }

  confirmar_envioFormulario() {
    this.formServ.confirmar_envio(this.response_login).subscribe(data => {
      console.log(data);
    });
  }

  conseguir_cedulas() {
    this.formServ.pedir_cedulas(this.response_login).subscribe(data => {
      console.log(data);
    });
  }

  conseguir_seccion(numero: any) {
    let s_formulario = {
      "number": numero,
      "ECN": localStorage.getItem("ECN"),
      "CFN": localStorage.getItem("CFN")
    };
    const usr = this.formServ
      .conseguir_seccion(s_formulario)
      .subscribe(data => {
        console.log(data);
      });
  }
}
