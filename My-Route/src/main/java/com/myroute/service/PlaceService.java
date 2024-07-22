package com.myroute.service;

import com.myroute.entity.Enum.PreferenceCategory;
import com.myroute.entity.Place;
import com.myroute.repository.PlaceRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PlaceService {

    @Autowired
    private PlaceRepository placeRepository;

    public List<Place> getAllPlaces(){
        return placeRepository.findAll();
    }

    public Optional<Place> getPlaceById(Long id) {
        return placeRepository.findById(id);
    }

    public Optional<Place> getPlaceByName(String name){
        return placeRepository.findByName(name);
    }

    public  List<Place> getPlacesByPreferenceCategory(PreferenceCategory preferenceCategory){
        return placeRepository.findByPreferenceCategory(preferenceCategory);
    }

    public Place createPlace(Place place) {
        return placeRepository.save(place);
    }
}
