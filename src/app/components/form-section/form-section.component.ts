import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";
import { FormlyJsonschema } from "@ngx-formly/core/json-schema";
import { FormService } from "../../services/form.service";
import { GeneralService} from "../../services/general.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-form-section",
  templateUrl: "./form-section.component.html",
  styleUrls: ["./form-section.component.scss"]
})
export class FormSectionComponent implements OnInit {
  seccion;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  submitted = false;
  success = false;
  response_login = {};
  fields: FormlyFieldConfig[] = [] 

  constructor(private formServ: FormService, private generalService: GeneralService, private formlyJsonschema: FormlyJsonschema, private router: Router) {}

  ngOnInit() {
    this.conseguir_seccion();
    this.response_login = {
      "ECN": localStorage.getItem("ECN"),
      "CFN": localStorage.getItem("CFN")
    };

    //this.fields = [this.seccion]

//   this.formServ.pedir_cedulas(this.response_login).subscribe(data => {
//     let id = data["family_identifiers"][0];
//     this.conseguir_respuestaP("142578965");
//   });


/*    let ajson =[
      {
      "id": 0,
      "type": "string",
      "question": "¿Cual es tu nombre completo?",
      "response": "Jose Alberto Arango Sanchez"
      },
      {
      "id": 0.1,
      "type": "string",
      "question": "¿Cual es tu tipo de documento de identificación?",
      "options": [
      "cédula de ciudadanía (CC)",
      "tarjeta de identidad (TI)",
      "tarjeta pasaporte (TP)",
      "registro civil (RC)",
      "cédula de extranjería (CE)"
      ],
      "response": "CC"
      },
      {
      "id": 0.2,
      "type": "integer",
      "question": "¿Cual es tu numero de identificación?",
      "response": "1017246338"
      },
      {
      "id": 1,
      "type": "option",
      "question": "¿QUÉ RELACIÓN DE PARENTESCO TIENE CON EL JEFE/a DE HOGAR?",
      "options": [
      "Jefe/a de Hogar",
      "Esposo/a o conyuge",
      "Conviviente por union civil",
      "Conviviente de hecho o pareja",
      "Hijo/a",
      "Hijo/a del cónyuge, conviviente o pareja",
      "Hermano/a",
      "Padre/Madre",
      "Cuñado/a",
      "Suegro/a",
      "Yerno/Nuera",
      "Nieto/a",
      "Abuelo/a",
      "Otro pariente",
      "No pariente",
      "Servicio doméstico puertas adentro"
      ],
      "response": "Hijo"
      },
      {
      "id": 2,
      "type": "option",
      "question": "¿CUÁL ES SU SEXO?",
      "options": [
      "Hombre",
      "Mujer"
      ],
      "response": "Mujer"
      },
      {
      "id": 3,
      "type": "integer",
      "question": "¿CUÁNTOS AÑOS CUMPLIDOS TIENE?",
      "response": "22"
      },
      {
      "id": 4,
      "type": "option",
      "question": "¿EN QUÉ MES Y AÑO NACIÓ?",
      "options": [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
      ],
      "response": ""
      },
      {
      "id": 5,
      "question": "¿EN QUÉ AÑO NACIÓ?",
      "type": "string",
      "response": ""
      },
      {
      "id": 6,
      "question": "¿ASISTE ACTUALMENTE A LA EDUCACIÓN FORMAL?",
      "type": "option",
      "options": [
      "Si",
      "No",
      "Nunca asistió"
      ],
      "response": ""
      },
      {
      "id": 7,
      "question": "¿Cuál es el curso o año más alto aprobado?",
      "type": "option",
      "options": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8"
      ],
      "response": ""
      },
      {
      "id": 8,
      "question": "El curso anteriormente declarado, a cuál de los siguientes niveles corresponde:",
      "type": "option",
      "options": [
      "Preescolar",
      "Especial o Diferencial",
      "Básica o Primaria",
      "Media o Secundaria",
      "Superior"
      ],
      "response": ""
      },
      {
      "question": "¿SE CONSIDERA PERTENECIENTE A ALGÚN PUEBLO INDÍGENA U ORIGINARIO?",
      "id": 9,
      "type": "option",
      "options": [
      "Si",
      "No"
      ],
      "response": ""
      }
    ]
      ;

      this.formServ.pedir_cedulas(this.response_login).subscribe(data => {
        let id = data["family_identifiers"][0];
        this.actualizar_respuestasF("142578965", ajson);
  
      });*/

/*    let aform = {
      "seccion": [
      {
      "number": 4,
      "name": "RETROALIMENTACIÓN",
      "description": "",
      "questions": [
      {
      "id": 1,
      "type": "option",
      "question": "¿Cual es el grado de satisfacción con la encuesta?",
      "options": [
      {
      "valor": "Muy satisfecho"
      },
      {
      "valor": "Satisfecho"
      },
      {
      "valor": "Neutro"
      },
      {
      "valor": "Insatisfecho"
      },
      {
      "valor": "Muy insatisfecho"
      }
      ],
      "response": "Insatisfecho"
      },
      {
      "id": 2,
      "type": "text",
      "question": "¿Tiene algún comentario adicional que añadir?",
      "response": "Todo bien todo bonito"
      }
      ]
      }
      ]
    };
      
    this.actualizar_respuestasS(4, aform);*/

    //this.conseguir_seccion(4);
    //this.confirmar_envioFormulario();
  }

  submit(){
    alert(JSON.stringify(this.model));
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

  conseguir_seccion() {
    let numero = localStorage.getItem("numero")
    let numero1 = +numero
    let s_formulario = {
      "number": numero1,
      "ECN": localStorage.getItem("ECN"),
      "CFN": localStorage.getItem("CFN")
    };
    //console.log(numero);
    this.formServ
      .conseguir_seccion(s_formulario)
      .subscribe(data => {
        let s = JSON.stringify(data["seccion"]);
        s = s.substr(1,(s.length-2));
        localStorage.setItem("form",s);
        //console.log(s);
        this.pintar_formulario();
        //localStorage.setItem("form1",test);
      });
  }

  pintar_formulario(){
    //window.location.reload();
    let form1 = localStorage.getItem("form");
    let obj = JSON.parse(form1);
    //console.log(obj);
    //et ase = localStorage.getItem("form1")
    //console.log(ase);
    //let obj2 = JSON.parse(ase);
    //console.log(obj2);
    this.fields = [this.formlyJsonschema.toFieldConfig(obj)];
    localStorage.removeItem("form");
    localStorage.removeItem("numero");
  }

  conseguir_respuestaP(number: any){
  this.formServ
    .pedir_respuestaPersona(this.response_login, number)
    .subscribe(data => {
      console.log(data);
    });
  }

  actualizar_respuestasF(number: any, form: any){
    this.formServ
    .actualizar_respuestaFormulario(this.response_login, number, form)
    .subscribe(data => {
      console.log(data);
    });
  }

  actualizar_respuestasS(number: any, form: any){
    this.formServ
    .actualizar_seccionEspecifica(this.response_login, number, form)
    .subscribe(data => {
      console.log(data);
    });
  }
}
