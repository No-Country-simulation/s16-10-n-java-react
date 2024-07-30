package com.myroute.service;
import com.myroute.dto.RouteReviewResponse;
import com.myroute.entity.Route;
import com.myroute.entity.RouteReview;
import com.myroute.repository.RouteRepository;
import com.myroute.repository.RouteReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class RouteReviewService {
    @Autowired
    private RouteReviewRepository routeReviewRepository;

    @Autowired
    private RouteRepository routeRepository;
    public List<RouteReview> getAllRouteReviews() {
        return routeReviewRepository.findAll();
    }

    public Optional<RouteReview> getRouteReviewById(Long id) {
        return routeReviewRepository.findById(id);
    }

    public RouteReview createRouteReview(RouteReview routeReview) {
        return routeReviewRepository.save(routeReview);
    }

    public RouteReview updateRouteReview(Long id, RouteReview routeReviewDetails) {
        RouteReview existingReview = routeReviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("RouteReview no encontrado"));

        existingReview.setReviewRange(routeReviewDetails.getReviewRange());
        existingReview.setComment(routeReviewDetails.getComment());
        Long routeId = routeReviewDetails.getRoute().getId(); // Asumiendo que Route tiene un método getId()
        Route route = routeRepository.findById(routeId)
                .orElseThrow(() -> new RuntimeException("Route no encontrado"));

        existingReview.setRoute(route);
        // existingReview.setUser(routeReviewDetails.getUser());

        return routeReviewRepository.save(existingReview);
    }
    public RouteReview deleteRouteReview(Long id) {
        RouteReview routeReview = routeReviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("RouteReview no se encuentra el id " + id));

        routeReviewRepository.delete(routeReview);
        return routeReview;
    }



    public RouteReviewResponse getRouteReviewOnlyById(Long id) {
        RouteReview routeReview = routeReviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("RouteReview no se encuentra el id " + id));

        return convertToDTO(routeReview);
    }
    private RouteReviewResponse convertToDTO(RouteReview routeReview) {
        RouteReviewResponse dto = new RouteReviewResponse();
        dto.setId(routeReview.getId());
        dto.setReviewRange(routeReview.getReviewRange());
        dto.setComment(routeReview.getComment());
        dto.setRouteId(routeReview.getRoute().getId()); // Solo el ID del Route

        return dto;
    }
}
