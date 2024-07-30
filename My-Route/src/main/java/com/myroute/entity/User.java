package com.myroute.entity;

import java.util.Date;
import java.util.List;

import com.myroute.enums.Preferences;
import com.myroute.enums.Rol_User;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
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
    private String lastName;
    private String email;

    @Temporal(TemporalType.DATE)
    private Date birthDate;

    private Boolean isActive; // inicia en verdadero, simboliza la baja o el alta del usuario

    @ElementCollection(targetClass = Preferences.class, fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name = "user_preferences", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "preference")
    private List<Preferences> preferences;

    @Enumerated(EnumType.STRING)
    private Rol_User rol;

 

}