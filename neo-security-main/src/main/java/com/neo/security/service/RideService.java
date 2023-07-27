package com.neo.security.service;

import java.util.List;

import com.neo.security.entity.Ride;

public interface RideService {

	String addRide(Ride ride);
	List<Ride> getRide();
}
