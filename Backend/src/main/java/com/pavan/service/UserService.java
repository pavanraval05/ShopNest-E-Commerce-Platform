package com.pavan.service;

import com.pavan.exception.UserException;
import com.pavan.model.User;
import jdk.jshell.spi.ExecutionControl;

public interface UserService {
    public User findUserById(Long id) throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;
}
