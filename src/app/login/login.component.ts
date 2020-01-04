import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HardcodedAuthenticationService } from "../service/hardcoded-authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "weesheng";
  password = "";
  errorMessage = "Invalid Creditials";
  invalidLogin = false;

  // Router router;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(
    private router: Router,
    private hardcodedAuthentication: HardcodedAuthenticationService
  ) {
    // this.router = router;
  }
  ngOnInit() {}

  handleLogin() {
    // console.log(this.username);
    // if (this.username === "weesheng" && this.password === "dummy")
    if (
      this.hardcodedAuthentication.authenticate(this.username, this.password)
    ) {
      //Redirct to Welcome Page
      this.router.navigate(["welcome", this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
