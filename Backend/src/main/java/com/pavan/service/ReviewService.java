package com.pavan.service;

import java.util.List;

import com.pavan.exception.ProductException;
import com.pavan.modal.Review;
import com.pavan.modal.User;
import com.pavan.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
