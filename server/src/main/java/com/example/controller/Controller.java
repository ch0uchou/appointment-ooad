package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.App;
import com.example.entity.Reminder;
import com.example.entity.User;
import com.example.repository.AppointmentRepository;
import com.example.repository.ReminderRepository;
import com.example.repository.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class Controller {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReminderRepository reminderRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    @PostMapping("/signup")
    public User greeting(@Validated @RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new IllegalArgumentException("Email already exists");
        }
        return userRepository.save(user);
    }

    @GetMapping("/getUser")
    public List<User> getMethodName() {
        return userRepository.findAll();
    }
    
}