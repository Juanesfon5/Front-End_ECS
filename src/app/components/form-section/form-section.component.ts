import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";
import { FormlyJsonschema } from "@ngx-formly/core/json-schema";

@Component({
  selector: "app-form-section",
  templateUrl: "./form-section.component.html",
  styleUrls: ["./form-section.component.scss"]
})
export class FormSectionComponent implements OnInit {
  form = new FormGroup({});
  model: any = {
    "1": "Comuna",
    "2": "Numero de orden",
    "3": "",
    "4": "Piso",
    "5": "Nombre",
    multipleChoicesList: "1"
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    this.formlyJsonschema.toFieldConfig({
      number: 1,
      type: "object",
      properties: {
        "1": {
          type: "string",
          title: "NOMBRE DE LA COMUNA",
          response: ""
        },
        "2": {
          type: "string",
          title: "N\u00daMERO DE ORDEN DE LA VIVIENDA",
          response: ""
        },
        "3": {
          type: "integer",
          title: "NUMERO DEL DOMICILIARIO",
          response: ""
        },
        "4": {
          type: "string",
          title: "PISO",
          response: ""
        },
        "5": {
          type: "string",
          title: "NOMBRE DE LA CALLE O CAMINO",
          response: ""
        }
      }
    })
  ];

  constructor(private formlyJsonschema: FormlyJsonschema) {}

  ngOnInit() {}

  submit() {
    alert(JSON.stringify(this.model));
  }
}
