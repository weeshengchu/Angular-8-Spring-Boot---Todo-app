package com.weesheng.rest.webservices.restfulwebservices.helloworld;

import javax.management.RuntimeErrorException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
	
	//GET
	//URI - /hello-world
	//method - "Hello World"
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	//hello-world bean
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
//		throw new RuntimeException("Some Error has Happened! Contact support at ***-***");
		return new HelloWorldBean("Hello World - Changed");
	}
	
	//hello-world/path-variable/weesheng
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
}
