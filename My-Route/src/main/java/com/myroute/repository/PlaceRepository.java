package com.myroute.repository;

import com.myroute.entity.Enum.PreferenceCategory;
import com.myroute.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlaceRepository extends JpaRepository <Place, Long> {
    Optional<Place> findByName(String name);
    List<Place> findByPreferenceCategory(PreferenceCategory preferenceCategory);
}
