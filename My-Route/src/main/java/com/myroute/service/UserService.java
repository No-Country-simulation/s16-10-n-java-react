package com.myroute.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.myroute.entity.User;
import com.myroute.enums.Preferences;
import com.myroute.enums.Rol_User;
import com.myroute.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

 // CREAR USUARIO
    @Transactional
    public void userRegister (String name, String lastName, String email, Boolean isActive, Rol_User rol, List<Preferences> preferences)throws Exception {
        // if (userRepository.findByEmail(email).isPresent()) {
        //     throw new Exception("El correo electrónico ya está registrado");
        // }

        User user = new User();

        user.setName(name);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setIsActive(true);
        user.setRol(rol);
        user.setPreferences(preferences);

        userRepository.save(user);
        
    }

    public List<User> findAll() {
        List<User> users = new ArrayList<>();
        users = userRepository.findAll();
        return users;
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
    
}
