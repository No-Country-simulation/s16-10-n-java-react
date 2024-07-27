package com.myroute.controller;

import com.myroute.dto.PlaceDto;
import com.myroute.entity.Enum.PreferenceCategory;
import com.myroute.entity.Place;
import com.myroute.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/places")
public class PlaceController {

    @Autowired
    private PlaceService placeService;

    @GetMapping("/list")
    public List<Place> getAllPlaces(){
        return placeService.getAllPlaces();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPlaceById(@PathVariable Long id){
        try{
            Optional<Place> placeOptional = placeService.getPlaceById(id);
            if (placeOptional.isPresent()){
                return ResponseEntity.ok(placeOptional.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Lugar no encontrado con ID "+id);
            }
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error " + e.getMessage());
        }
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<?> getPlaceByName(@PathVariable String name){
        try{
            Optional<Place> placeOptional = placeService.getPlaceByName(name);
            if (placeOptional.isPresent()){
                return ResponseEntity.ok(placeOptional.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El Lugar " + name + " no se ha encontrado");
            }
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error " + e.getMessage());
        }
    }

    @GetMapping("/category/{category}")
    ResponseEntity<List<Place>> getPlacesByPreferenceCategory(@PathVariable PreferenceCategory category){
        try {
            List<Place> places = placeService.getPlacesByPreferenceCategory(category);
            return ResponseEntity.ok(places);
        } catch (Exception e){
            return  ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping
    public ResponseEntity<?> createPlace(@RequestBody PlaceDto placeDto) {
        try {
            Place place =  placeService.createPlace(placeDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(place);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error " + e.getMessage());
        }
    }
}
