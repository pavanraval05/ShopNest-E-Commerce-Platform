package com.pavan.service;

import com.pavan.exception.ProductException;
import com.pavan.modal.Cart;
import com.pavan.modal.CartItem;
import com.pavan.modal.User;
import com.pavan.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public CartItem addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
