package com.myroute.controller;

import com.myroute.entity.Route;
import com.myroute.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/routes")
public class RouteController {

    @Autowired
    private RouteService routeService;

    @GetMapping
    public List<Route> getAllRoutes() {
        return routeService.getAllRoutes();
    }

    @GetMapping("/{id}")
    public Optional<Route> getRouteById(@PathVariable Long id) {
        return routeService.getRouteById(id);
    }

    @PostMapping
    public Route createRoute(@RequestBody Route route) {
        return routeService.createRoute(route);
    }

    @PutMapping("/{id}")
    public Route updateRoute(@PathVariable Long id, @RequestBody Route routeDetails) {
        return routeService.updateRoute(id, routeDetails);
    }

    @DeleteMapping("/{id}")
    public Route deleteRoute(@PathVariable Long id) {
        return routeService.deleteRoute(id);
    }

}
