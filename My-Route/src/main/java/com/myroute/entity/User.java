package com.myroute.entity;

import com.myroute.enums.Preferences;
import com.myroute.enums.Rol_User;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String last_name;
    private String email;

    @Enumerated(EnumType.STRING)
    private Preferences preferences;

    @Enumerated(EnumType.STRING)
    private Rol_User rol;

}