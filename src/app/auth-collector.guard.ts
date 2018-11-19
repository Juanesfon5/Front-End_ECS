import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { CollectorService } from "../app/services/collector.service";

@Injectable({
  providedIn: "root"
})
export class AuthCollectorGuard implements CanActivate {
  constructor(
    private collectorService: CollectorService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.collectorService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(["/loginCollector"]);
      return false;
    }
  }
}
