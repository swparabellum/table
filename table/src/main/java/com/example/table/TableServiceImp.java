package com.example.table;

import com.example.table.Domain.TableRepository;
import com.example.table.Domain.tableEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TableServiceImp implements TableService {

    private final TableRepository tableRepository;

    @Override
    public TableDTO getList() {

        boolean status = false;
        List<tableEntity> tlist;
        String msg = "";
        tlist = tableRepository.findAll();
        System.out.println("list of users: "+tlist);
        return TableDTO.builder().status(status).result(tlist).message(msg).build();

    }
}
