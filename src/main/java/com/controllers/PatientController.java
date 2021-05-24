package com.controllers;

import com.models.Patient;
import com.repository.PatientRepository;
import com.repository.SymtomsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/patient")
public class PatientController {
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private SymtomsRepository symtomsRepository;

    @GetMapping("/all")
    public List<Patient> allAccess() {
        return patientRepository.findAll();
    }

    @GetMapping("/{patientId}")
    public Optional<Patient> getPatientByPatientId(@PathVariable Long patientId) {
        return patientRepository.findById(patientId);
    }

    @PostMapping
    public ResponseEntity createUpdatePatient(@RequestBody Patient patient) throws Exception {
        symtomsRepository.saveAll(patient.getSymptoms());
        patientRepository.save(patient);
        return ResponseEntity.ok().body(new ArrayList<>());
    }

}
