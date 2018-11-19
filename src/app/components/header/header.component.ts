import { Component, OnInit } from "@angular/core";
import { FormService } from "../../services/form.service";
import { CookieService } from "angular2-cookie/core";

import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  response_login = {};
  constructor(
    private formServ: FormService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {}

  cerrarSesion() {
    localStorage.removeItem("ECN");
    localStorage.removeItem("CFN");
    this.cookieService.remove("access_token");
    this.cookieService.remove("refresh_token");
    this.router.navigate(["/"]);
  }
  confirmar() {
    this.response_login = {
      ECN: localStorage.getItem("ECN"),
      CFN: localStorage.getItem("CFN")
    };

    let R1 = localStorage.getItem("Respuesta1");
    let R2 = localStorage.getItem("Respuesta2");
    let R3 = localStorage.getItem("Respuesta3");
    let R4 = localStorage.getItem("Respuesta4");

    let T1 = this.isEmpty(JSON.parse(R1));
    let T2 = this.isEmpty(JSON.parse(R2));
    let T3 = this.isEmpty(JSON.parse(R3));
    let T4 = this.isEmpty(JSON.parse(R4));
    console.log(T1);

    if (T1 || T2 || T3 || T4) {
      alert("Aun faltan campos por completar");
    } else {
      console.log("Enviando formulario...");
      this.formServ.confirmar_envio(this.response_login);
    }

    //valir 1 por 1 si tiene todos los campos, en caso contrario alerta diciendo la seccion que hace falta por llenar

    //Llamar el servicio para confirmar en caso de que este completo
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj[key] == "" || obj[key] == null) {
        console.log(key + " -> " + obj[key]);
        return true;
      }
    }
    return false;
  }
}
