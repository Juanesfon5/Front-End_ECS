import { Component, OnInit } from "@angular/core";
import { FormService } from "../../services/form.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

  form1Presionado(){
    this.formServ.setNumber(1);
    //console.log("Funciona. se puso el número " + this.formServ.getNumber());    
  
  }


  constructor(private formServ: FormService, private router: Router) {}

  ngOnInit() {}

  
  form2Presionado(){
    this.formServ.setNumber(2);
    //console.log("Funciona. se puso el número " + this.formServ.getNumber());
    //this.router.navigate(["Form1"]);
  }

  form3Presionado(){
    
    //console.log("Funciona. se puso el número " + this.formServ.getNumber());
    //window.location.reload();
    this.formServ.setNumber(3);
  }
}
