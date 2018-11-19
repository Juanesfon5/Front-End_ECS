import { Component, OnInit } from "@angular/core";
import { CollectorService } from "../../services/collector.service";
import { Router } from "@angular/router";
import { CookieService } from "angular2-cookie/core";
import { AlertService } from "ngx-alerts";

@Component({
  selector: "app-code-management",
  templateUrl: "./code-management.component.html",
  styleUrls: ["./code-management.component.scss"]
})
export class CodeManagementComponent implements OnInit {
  collector = { id: "", fullName: "", cellphone: "" };
  codes = null;

  constructor(
    private collectorService: CollectorService,
    private router: Router,
    private cookieService: CookieService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    let kappa = {};
    this.getInfoCollector(localStorage.getItem("idCollector"));
    //this.asignar_entregados(kappa);
    this.getCodesCollector(localStorage.getItem("idCollector"));
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
      this.alertService.success("Código entregado!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

  cerrarSesion() {
    localStorage.removeItem("idAnalist");
    this.cookieService.remove("access_token");
    this.cookieService.remove("refresh_token");
    this.router.navigate(["/loginAnalist"]);
  }
}
