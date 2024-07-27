package com.myroute.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.myroute.entity.Enum.PreferenceCategory;
import jakarta.persistence.*;
import jdk.jfr.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @OneToMany(mappedBy = "place", cascade = CascadeType.ALL)
    private List<Schedule> schedules;

    @Enumerated(EnumType.STRING)
    private PreferenceCategory preferenceCategory;

    @ManyToMany
    @JoinTable(
            name = "route_place",
            joinColumns = @JoinColumn(name = "place_id"),
            inverseJoinColumns = @JoinColumn(name = "route_id")
    )
    private List<Route> routes;

    @Column
    private String imageSrc;

    @Column
    private  String imageAlt;

    @Column
    private String reach;

    @Column
    private String price;

    @Column
    private String weather;

    @Column
    private String address;

    @Column
    private Double latitude;

    @Column
    private Double longitude;

    @Column
    private String temporada;
}
