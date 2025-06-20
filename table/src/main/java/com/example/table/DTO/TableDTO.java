package com.example.table.DTO;

import lombok.*;

@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TableDTO {

    //값 반환을 위한 DTO

    private boolean status;
    private Object result;
    private String message;

}
