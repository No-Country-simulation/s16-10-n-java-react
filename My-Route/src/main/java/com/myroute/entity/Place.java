package com.myroute.entity;

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
@Table(name = "places")

public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @OneToMany(mappedBy = "place", cascade = CascadeType.ALL)
    private List<Schedule> schedules;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @Enumerated(EnumType.STRING)
    private PreferenceCategory preferenceCategory;

    @ManyToMany
    @JoinTable(
            name = "route_place",
            joinColumns = @JoinColumn(name = "place_id"),
            inverseJoinColumns = @JoinColumn(name = "route_id")
    )
    private List<Route> routes;
}
