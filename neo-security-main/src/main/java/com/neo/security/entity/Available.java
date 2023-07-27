package com.neo.security.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Available {

	@Id
	private String email;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAvailable() {
		return available;
	}
	public void setAvailable(String available) {
		this.available = available;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	private String available;
	private String place;
	
	private int fair;
	public int getFair() {
		return fair;
	}
	public void setFair(int fair) {
		this.fair = fair;
	}
	public int getTotalride() {
		return totalride;
	}
	public void setTotalride(int totalride) {
		this.totalride = totalride;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	private int totalride;
	private int rating;
	
}
