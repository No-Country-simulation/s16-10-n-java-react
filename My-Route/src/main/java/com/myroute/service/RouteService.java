package com.myroute.service;

import com.myroute.entity.Route;
import com.myroute.repository.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RouteService {

    @Autowired
    private RouteRepository routeRepository;

    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    public Optional<Route> getRouteById(Long id) {
        return routeRepository.findById(id);
    }

    public Route createRoute(Route route) {
        return routeRepository.save(route);
    }

    public Route updateRoute(Long id, Route routeDetails) {
        Route route = routeRepository.findById(id).orElseThrow(() -> new RuntimeException("Continente not found"));
        route.setRouteName(routeDetails.getRouteName());
        route.setRouteType(routeDetails.getRouteType());
        route.setDescription(routeDetails.getDescription());
        route.setIsActive(routeDetails.getIsActive());
        return routeRepository.save(route);
    }

    public Route deleteRoute(Long id) {
        Route route = routeRepository.findById(id).orElseThrow(() -> new RuntimeException("Route not found"));
        route.setIsActive(false);
        return routeRepository.save(route);
    }

}
