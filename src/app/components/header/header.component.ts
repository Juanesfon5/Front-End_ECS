import { Component, OnInit } from "@angular/core";
import { FormService } from "../../services/form.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private formServ: FormService, private router: Router) {}

  ngOnInit() {}
}
