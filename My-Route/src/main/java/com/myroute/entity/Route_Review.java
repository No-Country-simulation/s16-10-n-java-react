package com.myroute.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name="route_review")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Route_Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @Column(nullable = false)
    private Integer reviewRange; // range < 5

    //@Min(value = 0, message = "Range must be between 0 and 5")
    //@Max(value = 5, message = "Range must be between 0 and 5")
    @Column(nullable = false)
    private String comment;
    @ManyToOne
    @JoinColumn(name = "route_id", nullable = false)
    private Route route;



}
