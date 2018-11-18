import { Component, OnInit } from "@angular/core";
import { CollectorService } from "../../services/collector.service";
@Component({
  selector: "app-code-management",
  templateUrl: "./code-management.component.html",
  styleUrls: ["./code-management.component.scss"]
})
export class CodeManagementComponent implements OnInit {
  collector = { id: "", fullName: "", cellphone: "" };
  codes = null;

  constructor(private collectorService: CollectorService) {}

  ngOnInit() {
    let kappa = {};
    this.getInfoCollector(localStorage.getItem("idCollector"));
    //this.asignar_entregados(kappa);
    this.getCodesCollector("0527903051");
  }

  getInfoCollector(id) {
    this.collectorService.getInfoCollector(id).subscribe(data => {
      this.collector.id = data["id"];
      this.collector.fullName = data["fullName"];
      this.collector.cellphone = data["cellphone"];
    });
  }

  getCodesCollector(id) {
    this.collectorService.getCodesCollector(id).subscribe(data => {
      this.codes = data;
    });
  }

  asignar_entregados(ecn, cfn) {
    let credenciales = {
      ECN: ecn,
      CFN: cfn,
      collectorId: localStorage.getItem("idCollector")
    };
    /// Indicar que los CODIGOS ENTREGADOS
    this.collectorService.asignarCodigos(credenciales).subscribe(data => {
      alert(data["message"]);
    });
  }
}
