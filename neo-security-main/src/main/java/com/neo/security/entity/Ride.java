package com.neo.security.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ride {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String passengeremail;
	private String driveremail;
	private String pickup;
	
	private String droplocation;	
	
	private int ridefair = 0;
	public String getPassengeremail() {
		return passengeremail;
	}
	public void setPassengeremail(String passengeremail) {
		this.passengeremail = passengeremail;
	}
	public String getDriveremail() {
		return driveremail;
	}
	public void setDriveremail(String driveremail) {
		this.driveremail = driveremail;
	}
	public int getRidefair() {
		return ridefair;
	}
	public void setRidefair(int ridefair) {
		this.ridefair = ridefair;
	}
	public String getPickup() {
		return pickup;
	}
	public void setPickup(String pickup) {
		this.pickup = pickup;
	}
	public String getDroplocation() {
		return droplocation;
	}
	public void setDroplocation(String droplocation) {
		this.droplocation = droplocation;
	}

	
	
	
}
