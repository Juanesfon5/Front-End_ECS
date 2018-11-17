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
      console.log(data);
    });
  }
}
