package com.example.table;

import com.example.table.DTO.TableDTO;
import com.example.table.DTO.UserDTO;

public interface TableService {
    TableDTO getList();

    TableDTO register(UserDTO userDTO);
}
