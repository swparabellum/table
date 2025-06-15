package com.example.table;

import jakarta.persistence.Column;
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
