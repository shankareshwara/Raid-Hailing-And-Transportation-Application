package com.neo.security.repository;

import java.lang.StackWalker.Option;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.Ride;
import com.neo.security.entity.User;

public interface RideRepository extends JpaRepository<Ride, Integer>{

//	Optional<User> findByEmail(String email);
}
