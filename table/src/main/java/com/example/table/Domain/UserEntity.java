package com.example.table.Domain;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name="members")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(unique = true)
    private String userID;
    private String password;
    private String roles;

}
