package com.pavan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pavan.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
