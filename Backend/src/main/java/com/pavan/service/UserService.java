package com.pavan.service;

import java.util.List;

import com.pavan.exception.UserException;
import com.pavan.modal.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public List<User> findAllUsers();

}
