package com.pavan.service;

import java.util.List;

import com.pavan.exception.ProductException;
import com.pavan.modal.Rating;
import com.pavan.modal.User;
import com.pavan.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
