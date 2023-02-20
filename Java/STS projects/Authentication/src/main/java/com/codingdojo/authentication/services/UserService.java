package com.codingdojo.authentication.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.codingdojo.authentication.models.LoginUser;
import com.codingdojo.authentication.models.User;
import com.codingdojo.authentication.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;

	public User register(User newUser, BindingResult result) {
//		Email in use check
		Optional<User> optionaluser = userRepo.findByEmail(newUser.getEmail());
//		existing email error
		if (optionaluser.isPresent()) {
			result.rejectValue("email", "unique", "This email already is in use.");
		}
//		compare passwords
		if (!newUser.getPassword().equals(newUser.getConfirm())) {
			result.rejectValue("confirm", "matches", "Your password does not match");
		}
//		any errors return null
		if (result.hasErrors()) {
			return null;
		}
//		hash and salt
		String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
//		set password
		newUser.setPassword(hashed);

		userRepo.save(newUser);

		return newUser;
	}

	public User login(LoginUser loginUser, BindingResult result) {
		Optional<User> optionaluser = userRepo.findByEmail(loginUser.getEmail());
//		check if email exists
		if (!optionaluser.isPresent()) {
			result.rejectValue("email", "unavailable", "Unregistered email");
			return null;
		}
//		get user record
		User user = optionaluser.get();

//		check if loginUser password matches user password in DB
		if (!BCrypt.checkpw(loginUser.getPassword(), user.getPassword())) {
			result.rejectValue("password", "matches", "Invalid password");
		}
		if (result.hasErrors()) {
			return null;
		}
		return user;
	}
}
