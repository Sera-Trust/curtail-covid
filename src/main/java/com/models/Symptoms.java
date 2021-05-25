package com.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Symptoms {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String temperature;
    private String oxygenLevel;
    private String temperatureDate;
    private String temperatureTime;
    private String oxygenLevelDate;
    private String oxygenLevelTime;
    private Boolean bodyAche;
    private Boolean fatigue;
    private Boolean lossOfTaste;
    private Boolean lossOfSmell;
    private Boolean breathingDifficulty;
    private Boolean soreThroat;
    private Boolean headache;
    private Boolean nausea;
    private Boolean sneezing;
    private Boolean diarrhea;
    private String pulse;
    private String bloodPressure;
}
