package com.myroute.service;

import com.myroute.repository.PlaceRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PlaceService {

    private final PlaceRepository placeRepository;


}
