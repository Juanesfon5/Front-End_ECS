import { Component, OnInit } from "@angular/core";
import { CollectorService } from "../../services/collector.service";

@Component({
  selector: "app-login-collector",
  templateUrl: "./login-collector.component.html",
  styleUrls: ["./login-collector.component.scss"]
})
export class LoginCollectorComponent implements OnInit {
  constructor(private collectorService: CollectorService) {}
  CollectorCredential = {
    id: "1925650324",
    password: "Bade0u11vg"
  };
  ngOnInit() {
    this.authenticateCollector();
    this.tokenRefreshCollector();
    this.getInfoCollector();
  }

  authenticateCollector() {
    this.collectorService
      .authenticateCollector(this.CollectorCredential)
      .subscribe(data => {
        console.log(data);
      });
  }

  tokenRefreshCollector() {
    this.collectorService.tokenRefreshCollector().subscribe(data => {
      console.log(data);
    });
  }

  getInfoCollector() {
    this.collectorService.getInfoCollector("1925650324").subscribe(data => {
      console.log(data);
    });
  }
}
