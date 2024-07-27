package com.myroute.dto;

import com.myroute.entity.Enum.PreferenceCategory;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlaceDto {

    private String name;
    private String description;
    private PreferenceCategory preferenceCategory;
    private Double latitude;
    private Double longitude;
    private String imageSrc;
    private String imageAlt;
    private String reach;
    private String price;
    private String weather;
    private String address;
    private String temporada;

}