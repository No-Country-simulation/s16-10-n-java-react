package com.myroute.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myroute.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // User findById = null;

    User findByEmail(String email);
}
