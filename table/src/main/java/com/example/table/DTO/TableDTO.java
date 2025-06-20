package com.example.table.DTO;

import lombok.*;

@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TableDTO {

    private boolean status;
    private Object result;
    private String message;

}
