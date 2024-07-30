package com.myroute.controller;

import com.myroute.dto.RouteReviewResponse;
import com.myroute.entity.RouteReview;
import com.myroute.service.RouteReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/route-reviews")
public class RouteReviewController {
    @Autowired
    private RouteReviewService routeReviewService;


    @GetMapping
    public List<RouteReview> getAllRouteReviews() {
        return routeReviewService.getAllRouteReviews();
    }

    @GetMapping("/{id}")
    public Optional<RouteReview> getRouteReviewById(@PathVariable Long id) {
        return routeReviewService.getRouteReviewById(id);
    }
    @PostMapping
    public RouteReview createRouteReview(@RequestBody RouteReview routeReview) {
        return routeReviewService.createRouteReview(routeReview);
    }
    @PutMapping("/{id}")
    public RouteReview updateRouteReview(@PathVariable Long id, @RequestBody RouteReview routeReviewDetails) {
        return routeReviewService.updateRouteReview(id, routeReviewDetails);
    }
    @DeleteMapping("/{id}")
    public void deleteRouteReview(@PathVariable Long id) {
        routeReviewService.deleteRouteReview(id);
    }

    @GetMapping("/onlytable/{id}")
    public ResponseEntity<RouteReviewResponse> getRouteReviewOnlyById(@PathVariable Long id) {
        try {
            RouteReviewResponse routeReviewDTO = routeReviewService.getRouteReviewOnlyById(id);
            return ResponseEntity.ok(routeReviewDTO);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build(); // Retorna 404 si no se encuentra el recurso
            //throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontró la tabla: " + id); // Retorna 404 si no se encuentra el recurso
            //es lo mismo pero con mensaje de error
        }
    }
}
