package com.orangeform.backend.service;

import com.orangeform.backend.model.User;

public interface UserService {
    boolean existsByEmail(String email);
    void saveUser(User user);
    User findByEmail(String email);
}
