package com.example.table.DTO;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    //private Integer id;

    private String name;

    private String email;

    private String phone;

    private String website;

}
