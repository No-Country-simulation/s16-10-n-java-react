package com.myroute.repository;

import com.myroute.entity.RouteReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteReviewRepository extends JpaRepository<RouteReview,Long> {

}
