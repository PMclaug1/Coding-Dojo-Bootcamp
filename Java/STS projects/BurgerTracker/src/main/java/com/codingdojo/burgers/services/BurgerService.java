package com.codingdojo.burgers.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.codingdojo.burgers.models.Burger;
import com.codingdojo.burgers.repositories.BurgerRepository;

@Service
public class BurgerService {
	private final BurgerRepository burgerRepo;
	
	public BurgerService(BurgerRepository burgerRepo) {
		this.burgerRepo = burgerRepo;
	}
	
	public List<Burger> allBurgers() {
		return burgerRepo.findAll();
	}
	
	public Burger addBurger(Burger burger) {
		return burgerRepo.save(burger);
	}
}
