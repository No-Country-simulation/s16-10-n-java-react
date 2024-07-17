package com.myroute.entity;

import com.myroute.entity.Enum.PreferenceCategory;
import jakarta.persistence.*;
import jdk.jfr.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

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

    @Column(nullable = false)
    private String description;

    @OneToMany(mappedBy = "place", cascade = CascadeType.ALL)
    private List<Schedule> schedules;

    @ManyToOne(fetch = FetchType.LAZY)
    private City city;

    @Enumerated(EnumType.STRING)
    private PreferenceCategory preferenceCategory;

}
