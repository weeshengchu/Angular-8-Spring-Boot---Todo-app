//package com.weesheng.springboot.web

//import org.springframework.boot.SpringApplication
import { Component, OnInit } from "@angular/core"; //'./app.component';
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService } from "../service/data/welcome-data.service";

//@ComponentScan(
//      value = "com.weesheng.springboot.web")
@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})

//public class SpringBootFirstWebApplication implements SomeInterface{}
export class WelcomeComponent implements OnInit {
  //String message = "Some Welcome Message"
  message = "Some Welcome Message";
  welcomeMessageFromService: string;
  name = "";

  //public SpringBootFirstWebApplication

  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  //void inti() {}
  ngOnInit() {
    //COMPILATION ERROR this.message = 5
    console.log(this.message);
    // console.log(this.route.snapshot.params["name"]);
    this.name = this.route.snapshot.params["name"];
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log("last line of getWelcomeMessage");
    // console.log("getWelcomeMessage");
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}
