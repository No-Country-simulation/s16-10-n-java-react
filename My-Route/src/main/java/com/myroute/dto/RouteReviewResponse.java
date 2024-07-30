package com.myroute.dto;


import lombok.Data;

@Data
public class RouteReviewResponse {
    private Long id;
    private Integer reviewRange;
    private String comment;
    private Long routeId;
}