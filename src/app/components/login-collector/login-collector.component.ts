import { Component, OnInit } from "@angular/core";
import { CollectorService } from "../../services/collector.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router/";

@Component({
  selector: "app-login-collector",
  templateUrl: "./login-collector.component.html",
  styleUrls: ["./login-collector.component.scss"]
})
export class LoginCollectorComponent implements OnInit {
  constructor(
    private collectorService: CollectorService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.construirFormulario();
  }

  loginForm: FormGroup;
  correctoLogin: boolean;

  construirFormulario() {
    this.correctoLogin = true;
    this.loginForm = this.fb.group({
      id: [
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      clave: ["", Validators.compose([Validators.required])]
    });
  }

  submit() {
    let id = this.loginForm.get("id").value;
    let clave = this.loginForm.get("clave").value;
    let CollectorCredential = { id: id, password: clave };
    console.log(CollectorCredential);
    this.authenticateCollector(CollectorCredential);
  }

  ngOnInit() {}

  authenticateCollector(CollectorCredential) {
    this.collectorService
      .authenticateCollector(CollectorCredential)
      .subscribe(data => {
        console.log(data);

            


        this.correctoLogin = true;
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
