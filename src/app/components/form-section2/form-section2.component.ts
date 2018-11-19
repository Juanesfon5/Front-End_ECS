import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";
import { FormlyJsonschema } from "@ngx-formly/core/json-schema";
import { FormService } from "../../services/form.service";
import { GeneralService } from "../../services/general.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-section2",
  templateUrl: "./form-section2.component.html",
  styleUrls: ["./form-section2.component.scss"]
})
export class FormSection2Component implements OnInit {
  seccion;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  submitted = false;
  success = false;
  response_login = {};
  fields: FormlyFieldConfig[] = [];

  constructor(
    private formServ: FormService,
    private generalService: GeneralService,
    private formlyJsonschema: FormlyJsonschema,
    private router: Router
  ) {}

  ngOnInit() {
    this.conseguir_seccion();
    this.response_login = {
      ECN: localStorage.getItem("ECN"),
      CFN: localStorage.getItem("CFN")
    };
  }

  submit() {
    alert(JSON.stringify(this.model));
    let respuestas = JSON.stringify(this.model);
    localStorage.setItem("Respuesta2", respuestas);
    this.actualizar_respuestasS(2, respuestas);
  }

  // Validar que todos los campos campos de los formularios
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

  conseguir_seccion() {
    let s_formulario = {
      number: 2,
      ECN: localStorage.getItem("ECN"),
      CFN: localStorage.getItem("CFN")
    };
    //console.log(numero);
    this.formServ.conseguir_seccion(s_formulario).subscribe(data => {
      let s = JSON.stringify(data["seccion"]);
      s = s.substr(1, s.length - 2);
      localStorage.setItem("form", s);
      //console.log(s);
      let modelo = data["seccion"][0]["respuestas"];

      this.pintar_formulario(modelo);
      //localStorage.setItem("form1",test);
    });
  }

  pintar_formulario(modelo) {
    //window.location.reload();
    let form1 = localStorage.getItem("form");
    let obj = JSON.parse(form1);
    //console.log(obj);
    //et ase = localStorage.getItem("form1")
    //console.log(ase);
    //let obj2 = JSON.parse(ase);
    //console.log(obj2);
    this.fields = [this.formlyJsonschema.toFieldConfig(obj)];
    this.model = modelo;
    localStorage.removeItem("form");
  }

  conseguir_respuestaP(number: any) {
    this.formServ
      .pedir_respuestaPersona(this.response_login, number)
      .subscribe(data => {
        console.log(data);
      });
  }

  actualizar_respuestasF(number: any, form: any) {
    this.formServ
      .actualizar_respuestaFormulario(this.response_login, number, form)
      .subscribe(data => {
        console.log(data);
      });
  }

  actualizar_respuestasS(number: any, form: any) {
    this.formServ
      .actualizar_seccionEspecifica(this.response_login, number, form)
      .subscribe(data => {
        console.log(data);
      });
  }
}
