package com.example.table;

import com.example.table.DTO.TableDTO;
import com.example.table.DTO.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/table")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600)
public class TableController {

    private final TableService tableService;


    @GetMapping
    public TableDTO table(){
        return tableService.getList();
    }

    @PostMapping
    public TableDTO addTable(@RequestBody UserDTO userDTO){
        return tableService.register(userDTO);
    }

    @DeleteMapping
    public TableDTO deleteTable(@RequestBody UserDTO userDTO){
        return tableService.delete(userDTO);
    }
}
