package com.example.table.Domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TableRepository extends JpaRepository<tableEntity, Integer> {
}
