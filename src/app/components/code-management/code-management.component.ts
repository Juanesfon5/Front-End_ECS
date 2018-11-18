import { Component, OnInit } from "@angular/core";
import { CollectorService } from "../../services/collector.service";
@Component({
  selector: "app-code-management",
  templateUrl: "./code-management.component.html",
  styleUrls: ["./code-management.component.scss"]
})
export class CodeManagementComponent implements OnInit {
  constructor(private collectorService: CollectorService) {}

  ngOnInit() {
    let kappa = {};
    //this.getCodesCollector("0527903051");
    //this.asignar_entregados(kappa);
    //this.getCodesCollector("0527903051");
  }

  getCodesCollector(id) {
    this.collectorService.getCodesCollector(id).subscribe(data => {
      console.log(data);
    });
  }

  asignar_entregados(credenciales: Object) {
    /*    //FINES DE PRUEBA
    credenciales = {
      "ECN": "1333606745",
      "CFN": "6594753290",
    }*/

    //REAL
    credenciales = {
      credenciales,
      colectorId: localStorage.getItem("colectorId")
    };

    /// Indicar que los CODIGOS ENTREGADOS
    this.collectorService.asignarCodigos(credenciales).subscribe(data => {
      console.log(data);
      /**
       * Data
          * {
    message:"the code was delivered successfully",
    success:true
    }
       */
    });
  }
}
