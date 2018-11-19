import { Component, OnInit } from "@angular/core";
import { AnalistService } from "../../services/analist.service";
import { CookieService } from "angular2-cookie/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-census-metrics",
  templateUrl: "./census-metrics.component.html",
  styleUrls: ["./census-metrics.component.scss"]
})
export class CensusMetricsComponent implements OnInit {
  constructor(
    private analistService: AnalistService,
    private cookieService: CookieService,
    private router: Router
  ) {}
  ngOnInit() {
    this.getStatistics();
  }

  public peticionhecha = false;
  public pieChartData: number[] = [0, 0];
  public pieChartType: string = "pie";
  public barChartData: any[];
  getStatistics() {
    this.analistService.getStatistics().subscribe(datos => {
      this.pieChartData[0] = datos["confirmed_forms"];
      this.pieChartData[1] = datos["no_confirmed_forms"];

      this.barChartData = [
        { data: [datos["delivered_forms"]], label: "Códigos Entregadas" },
        { data: [datos["no_delivered_forms"]], label: "Códigos por Entregar" }
      ];

      this.peticionhecha = true;
    });
  }
  // Primer Grafico
  public pieChartLabels: string[] = [
    "Formularios confirmados",
    "Formularios No confirmados"
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  //Segundo Grafico

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [""];
  public barChartType: string = "bar";
  public barChartLegend: boolean = true;

  // events
  public chartClicked2(e: any): void {
    console.log(e);
  }

  public chartHovered2(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }

  cerrarSesion() {
    localStorage.removeItem("idAnalist");
    this.cookieService.remove("access_token");
    this.cookieService.remove("refresh_token");
    this.router.navigate(["/loginAnalist"]);
  }
}
