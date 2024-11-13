package com.pavan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pavan.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
