package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Appointment;
import com.example.entity.User;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
  // List<Appointment> findByUser(User user);
}
