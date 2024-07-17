package com.myroute.service;

import java.util.List;
import java.util.Optional;
import java.util.prefs.Preferences;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.myroute.entity.User;
import com.myroute.enums.Rol_User;
import com.myroute.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

 // CREAR USUARIO
    @Transactional
    public void userRegister (String name, String last_name, String email, Rol_User rol, Preferences preferences)throws Exception {
        if (userRepository.findByEmail(email).isPresent()) {
            throw new Exception("El correo electrónico ya está registrado");
        }

        User user = new User();

        user.setName(name);
        user.setLast_name(last_name);
        user.setEmail(email);
        user.setRol(null);
        user.setPreferences(null);

        userRepository.save(user);
        
    }

    public List<User> findAll() {
        return userRepository.findAll();
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
