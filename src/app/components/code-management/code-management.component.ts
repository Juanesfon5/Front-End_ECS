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
    this.getCodesCollector("0527903051");
  }

  getCodesCollector(id) {
    this.collectorService.getCodesCollector(id).subscribe(data => {
      console.log(data);
    });
  }
  setDeliverCredential() {}
}
