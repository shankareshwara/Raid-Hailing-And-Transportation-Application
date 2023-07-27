package com.neo.security.service;

//import java.awt.PageAttributes.MediaType;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.web.reactive.function.client.WebClient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.http.MediaType;


import com.neo.security.entity.User;
import com.neo.security.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository repo;
	
	
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public Boolean addUser(User user) {
		
		String encodedPassword = passwordEncoder.encode(user.getPassword());
		
		User user1 = User.builder()
				
				.username(user.getUsername())
				.password(encodedPassword)
				.email(user.getEmail())
				.ride(0)
				.totalAmount(0)
				.phoneNumber(user.getPhoneNumber())
				.build();
		
		 return repo.save(user1)!=null ? true:false;
	}

	@Override
	public List<User> getAllUsers() {
		return repo.findAll();
	}

	@Override
	public User getUserByEmail(String email) {
	
		return repo.findByEmail(email).get();
	}



	@Override
	public String putByEmail(String email) {
				User user = repo.findByEmail(email).get();
				if(user != null) {
					User user1 = User.builder()
							.username(user.getUsername())
							.password(user.getPassword())
							.email(user.getEmail())
							.ride(user.getRide()+1)
							.totalAmount(0)
							.phoneNumber(user.getPhoneNumber())
							.build();
					
					  repo.saveAndFlush(user1);
					  return "saved";
				}
				else {
					return "error";
				}
				
	}
	
	

}