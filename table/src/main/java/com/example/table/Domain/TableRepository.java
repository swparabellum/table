package com.example.table.Domain;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TableRepository extends JpaRepository<TableEntity, Integer> {
}
