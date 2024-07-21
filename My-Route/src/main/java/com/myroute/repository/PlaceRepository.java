package com.myroute.repository;

import com.myroute.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaceRepository extends JpaRepository <Place, Long> {
    List<Place> findByName(String name);


}
