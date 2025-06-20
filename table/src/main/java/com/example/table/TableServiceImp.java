package com.example.table;

import com.example.table.DTO.TableDTO;
import com.example.table.DTO.UserDTO;
import com.example.table.Domain.TableRepository;
import com.example.table.Domain.TableEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TableServiceImp implements TableService {

    private final TableRepository tableRepository;

    @Override
    public TableDTO getList() {

        boolean status = false;
        List<TableEntity> tlist;
        String msg = "";
        tlist = tableRepository.findAll();
        System.out.println("list of users: "+tlist);
        return TableDTO.builder().status(status).result(tlist).message(msg).build();

    }

    @Override
    public TableDTO register(UserDTO userDTO) {
        boolean status = false;
        String msg = "";

        long counter = tableRepository.count();
        System.out.println("counter: "+counter);
        System.out.println("userDTO: "+userDTO);
        TableEntity tableEntity = TableEntity.builder()
                //.id((int) (counter+1))
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .phone(userDTO.getPhone())
                .website(userDTO.getWebsite())
                .build();
        System.out.println("tableEntity: "+tableEntity);
        tableRepository.save(tableEntity);
        return TableDTO.builder().status(status).result("").message(msg).build();
    }
}
