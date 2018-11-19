import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";
import { FormlyJsonschema } from "@ngx-formly/core/json-schema";
import { FormService } from "../../services/form.service";
import { GeneralService } from "../../services/general.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-section3",
  templateUrl: "./form-section3.component.html",
  styleUrls: ["./form-section3.component.scss"]
})
export class FormSection3Component implements OnInit {
  seccion;
  form = new FormGroup({});
  model = {
    questions: [
      {
        nombrePersona: "",
        identificación: "",
        numero_identificación: "",
        relacion: "",
        genero: "",
        edad: "",
        fecha_nacimiento: "",
        educacion: "",
        año_alto: "",
        tipo_educacion: "",
        indigena: ""
      }
    ]
  };
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
    this.response_login = {
      ECN: localStorage.getItem("ECN"),
      CFN: localStorage.getItem("CFN")
    };
    this.decisionDeCarga();
  }

  decisionDeCarga() {
    this.conseguir_seccion();
    this.conseguir_respuestaP();
  }

  submit() {
    let respuestas = this.model;
    console.log(respuestas);
    this.actualizar_respuestasPersona(respuestas);
    localStorage.setItem("Respuesta3", JSON.stringify(this.model));
    //Recorer el array e insertar en la db de cada persona

    //this.router.navigate(["../Form4"]);
  }

  // Validar que todos los campos campos de los formularios
  confirmar_envioFormulario() {
    this.formServ.confirmar_envio(this.response_login).subscribe(data => {
      //console.log(data);
    });
  }

  conseguir_seccion() {
    let s_formulario = {
      number: 3,
      ECN: localStorage.getItem("ECN"),
      CFN: localStorage.getItem("CFN")
    };
    //console.log(numero);
    this.formServ.conseguir_seccion(s_formulario).subscribe(data => {
      /*let s = data["seccion"."value"];
        console.log(s);
        console.log(s.value);
        console.log(JSON.stringify(s.value));
        //console.log(sa);
        //s = s.substr(1,(s.length-2));
        localStorage.setItem("form",s);
        //console.log(s);
        this.pintar_formulario();
        //localStorage.setItem("form1",test);*/
      let s = data["seccion"][0]["value"][0];
      let sa = JSON.stringify(s);
      //console.log(s);
      //console.log(sa);
      localStorage.setItem("form", sa);
      this.pintar_formulario();
    });
  }

  pintar_formulario() {
    //window.location.reload();
    let form1 = localStorage.getItem("form");
    //console.log(form1);
    let obj = JSON.parse(form1);
    //console.log(obj);
    //et ase = localStorage.getItem("form1")
    //console.log(ase);
    //let obj2 = JSON.parse(ase);
    //console.log(obj2);
    this.fields = [obj];
    localStorage.removeItem("form");
  }

  conseguir_respuestaP() {
    this.formServ
      .pedir_respuestaPersona(this.response_login)
      .subscribe(data => {
        console.log(data["form"]);
        if (data["form"] != null) {
          this.model = data["form"];
        }
      });
  }

  actualizar_respuestasPersona(form: any) {
    this.formServ
      .actualizar_respuestaFormularioPersona(this.response_login, form)
      .subscribe(data => {
        console.log(data);
      });
  }

  actualizar_respuestasS(number: any, form: any) {
    this.formServ
      .actualizar_seccionEspecifica(this.response_login, number, form)
      .subscribe(data => {
        //console.log(data);
      });
  }
}
