import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AnalistService } from "../app/services/analist.service";

@Injectable({
  providedIn: "root"
})
export class AuthAnalistGuard implements CanActivate {
  constructor(private analistService: AnalistService, private router: Router) {}

  canActivate(): boolean {
    if (this.analistService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(["loginAnalist"]);
      return false;
    }
  }
}
