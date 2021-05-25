package com.models;

import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String surname;
    private String aadharCard;
    private String age;
    private String gender;
    private String phoneNumber;
    private String address;
    private String village;
    private String mandal;
    private String district;
    private String state;
    private String pincode;
    private String covidStatus;
    private String nearestLandmark;
    private String emergencyContactName;
    private String emergencyContactNumber;
    private String dateFirstObserved;
    @OneToMany
    private List<Symptoms> symptoms;


}
