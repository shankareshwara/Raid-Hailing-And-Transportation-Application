package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.Ride;
import com.neo.security.repository.RideRepository;
@Service
public class RideServiceImpl implements RideService{

	
	@Autowired
	RideRepository repo;
	@Override
	public String addRide(Ride ride) {
			repo.save(ride);
		return "saved";
	}

	@Override
	public List<Ride> getRide() {
		return repo.findAll();
//		return null;
	}

}
