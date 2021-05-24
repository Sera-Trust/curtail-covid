package com;

import com.models.*;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class Data {
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder encoder;

    @PostConstruct
    public void insertData() {
        insertUsers();
//        insertDemographics();
    }

    public void insertUsers() {
        User user = new User(null, "user", encoder.encode("user"));
        userRepository.saveAll(Arrays.asList(user));
    }

    public void insertDemographics() {
        State state = new State();
        state.setName("Telangana");
        District district1 = new District(null, "Wanaparthy", null);
        District district2 = new District(null, "Kammam", null);

        state.setDistricts(Arrays.asList(district1, district2));
        Mandal mandal1 = new Mandal();
        Mandal mandal2 = new Mandal(null, "Amarchinta", null);
        Mandal mandal3 = new Mandal(null, "Atmakur", null);
        Mandal mandal4 = new Mandal(null, "Chinnambavi", null);
        Mandal mandal5 = new Mandal(null, "Ghanpur (Khilla)", null);
        Mandal mandal6 = new Mandal(null, "Gopalpeta", null);
        Mandal mandal7 = new Mandal(null, "Kothakota", null);
        Mandal mandal8 = new Mandal(null, "Madanapur", null);
        Mandal mandal9 = new Mandal(null, "Pangal", null);
        Mandal mandal10 = new Mandal(null, "Pebbair", null);
        Mandal mandal11 = new Mandal(null, "Peddamandadi", null);
        district1.setMandals(Arrays.asList(mandal1, mandal2, mandal3, mandal4, mandal5, mandal6, mandal7, mandal8, mandal9, mandal10, mandal11));
//        Village village1 = new Village(null, "Alwal");
//        Village village1 = new Village(null, "Chinnamandadi");
//        Village village1 = new Village(null, "Dodaguntapally");
//        Village village1 = new Village(null, "Gatlakhanapur");
//        Village village1 = new Village(null, "Jagathpally");
//        Village village1 = new Village(null, "Maddigatla");
//        Village village1 = new Village(null, "Mangampalli");
//        Village village1 = new Village(null, "Manigilla");
//        Village village1 = new Village(null, "Mojerla");
//        Village village1 = new Village(null, "Pamireddipally");
//        Village village1 = new Village(null, "Peddamandadi");
//        Village village1 = new Village(null, "Veeraipally");
//        Village village1 = new Village(null, "Veltoor");

        List<District> districts = new ArrayList();
        state.setDistricts(districts);
    }
}
