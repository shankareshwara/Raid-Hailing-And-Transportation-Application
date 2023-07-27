package com.neo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.Driver;
import com.neo.security.entity.LoginDriver;
import com.neo.security.entity.ResponseMessage;
import com.neo.security.service.DriverServiceImpl;


@RestController
public class DriverController {
	
	@Autowired
	private DriverServiceImpl service;
	
	@PostMapping("/add")
	public String addDriver(@RequestBody Driver driver) {
		return service.addDriver(driver);
	}
	
	@GetMapping("/get")
	public List<Driver> getDriver(){
		return service.showDriver();
	}

	@GetMapping("/get/{email}")
	public Driver getDriverByEmail(@PathVariable String email){
		return service.getDriverByEmail(email);
	}
	
	
	
	
}
