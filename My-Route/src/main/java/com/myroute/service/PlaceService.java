package com.myroute.service;

import com.myroute.dto.PlaceDto;
import com.myroute.entity.Enum.PreferenceCategory;
import com.myroute.entity.Place;
import com.myroute.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
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

    public Place createPlace(PlaceDto placeDto) {
        Place place = new Place();
        place.setName(placeDto.getName());
        place.setDescription(placeDto.getDescription());
        place.setPreferenceCategory(placeDto.getPreferenceCategory());
        place.setLatitude(placeDto.getLatitude());
        place.setLongitude(placeDto.getLongitude());
        place.setImageSrc(placeDto.getImageSrc());
        place.setImageAlt(placeDto.getImageAlt());
        place.setReach(placeDto.getReach());
        place.setPrice(placeDto.getPrice());
        place.setWeather(placeDto.getWeather());
        place.setAddress(placeDto.getAddress());
        place.setTemporada(placeDto.getTemporada());

        return placeRepository.save(place);
    }

}
