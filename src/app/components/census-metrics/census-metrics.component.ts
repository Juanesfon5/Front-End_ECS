import { Component, OnInit } from "@angular/core";
import { AnalistService } from "../../services/analist.service";

@Component({
  selector: "app-census-metrics",
  templateUrl: "./census-metrics.component.html",
  styleUrls: ["./census-metrics.component.scss"]
})
export class CensusMetricsComponent implements OnInit {
  constructor(private analistService: AnalistService) {}
  ngOnInit() {
    this.getStatistics();
  }

  getStatistics() {
    this.analistService.getStatistics().subscribe(data => {
      //console.log(data);
      this.pieChartData[0] = data["confirmed_forms"];
      this.pieChartData[1] = data["no_confirmed_forms"];
    });
  }
  // Primer Grafico
  public pieChartLabels: string[] = [
    "Formularios confirmados",
    "Formularios No confirmados"
  ];
  public pieChartData: number[] = [0, 0];
  public pieChartType: string = "pie";

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

  public barChartData: any[] = [
    { data: [65], label: "Códigos Entregadas" },
    { data: [28], label: "Códigos por Entregar" }
  ];

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
}
