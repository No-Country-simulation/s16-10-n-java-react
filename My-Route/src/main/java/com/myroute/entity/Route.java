package com.myroute.entity;

import com.myroute.entity.Enum.RouteType;
import jakarta.persistence.*;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "routes")
@Data
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "route_name")
    private String routeName;

    @Column(name = "route_type")
    @Enumerated(EnumType.STRING)
    private RouteType routeType;

    private String description;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @ManyToMany(mappedBy = "routes", cascade = CascadeType.ALL)
    private List<Place> places = new ArrayList<>();

    @OneToMany(mappedBy = "route", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<RouteReview> routeReview;

}
