package com.myroute.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name="route_review")
@Data
public class RouteReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
/*
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;*/
    @Column(nullable = false)
    private Integer reviewRange; // range < 5
    @Column(nullable = false)
    private String comment;

    @ManyToOne
    @JoinColumn(name = "route_id", nullable = false)
    private Route route;



}
