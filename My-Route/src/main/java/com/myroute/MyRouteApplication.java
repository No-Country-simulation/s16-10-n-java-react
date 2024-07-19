package com.myroute;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyRouteApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyRouteApplication.class, args);
	}
	// @RestController
	// class HelloWorldController {
	// 	@GetMapping("/")
	// 	public String hello() {
	// 		return "Backend simulación";
	// 	}
	// }

}
