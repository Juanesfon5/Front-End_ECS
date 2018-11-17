import { Component, OnInit } from "@angular/core";
import { AnalistService } from "../../services/analist.service";
@Component({
  selector: "app-login-analist",
  templateUrl: "./login-analist.component.html",
  styleUrls: ["./login-analist.component.scss"]
})
export class LoginAnalistComponent implements OnInit {
  constructor(private analistService: AnalistService) {}

  analistCredential = {
    id: "7591517953",
    password: "X4SaGB"
  };
  ngOnInit() {
    
    //this.loginAnalist();
    //this.tokenRefreshAnalist();
    this.getInfoAnalist({ "id": "7591517953" });
  }

  loginAnalist() {
    this.analistService
      .authenticateAnalist(this.analistCredential)
      .subscribe(data => {
        console.log(data);
      });
  }

  tokenRefreshAnalist() {
    this.analistService.tokenRefreshAnalist().subscribe(data => {
      console.log(data);
    });
  }

  getInfoAnalist(id) {
    this.analistService.getInfoAnalist(id).subscribe(data => {
      console.log(data);
    });
  }
}
