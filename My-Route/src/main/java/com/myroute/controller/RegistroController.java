package com.myroute.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.myroute.entity.User;
import com.myroute.enums.Preferences;
import com.myroute.enums.Rol_User;
import com.myroute.service.UserService;

@Controller
@RequestMapping("/users")
public class RegistroController {
    
    @Autowired
    private UserService userService;

    //Registro de usuario
    @GetMapping("/register")
    public String userRegister(Model model) {

        model.addAttribute("roles", Rol_User.values());
        model.addAttribute("preferences", Preferences.values());
        return "register";
    }

    @PostMapping("/registerUser")
    public String registro(@RequestParam String name, @RequestParam String lastName, 
    @RequestParam String email, Boolean isActive, @RequestParam Rol_User rol,@RequestParam List<Preferences> preferences,ModelMap modelo) {

        try {

            userService.userRegister(name, lastName, email, isActive, rol, preferences);
            

            modelo.put("exito", "Usuario registrado correctamente!");

            return "users";
        } catch (Exception ex) {

            modelo.put("error", ex.getMessage());
            modelo.put("nombre", name);
            modelo.put("email", email);

            return "register";
        }

    }

    //MUESTRA LA LISTA DE USUARIOS
    @GetMapping("/listUsers")
    public String listUsers(Model model) {
        List<User> users = userService.findAll();
        model.addAttribute("users", users);
        return "users"; 
    }

    //BUSCA AL USUARIO POR ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //ACTUALIZA LOS DATOS DEL USUARIO
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        Optional<User> user = userService.findById(id);
        if (user.isPresent()) {
            User updatedUser = user.get();
            updatedUser.setName(userDetails.getName());
            updatedUser.setLastName(userDetails.getLastName());
            updatedUser.setEmail(userDetails.getEmail());
            updatedUser.setIsActive(userDetails.getIsActive());
            updatedUser.setPreferences(userDetails.getPreferences());
            updatedUser.setRol(userDetails.getRol());
            userService.save(updatedUser);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //ELIMINA UN USUARIO
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
