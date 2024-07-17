package com.myroute.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myroute.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // User findById = null;

    Optional<User> findByEmail(String email);
}
