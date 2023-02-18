package com.codingdojo.travel.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.travel.models.Travel;
import com.codingdojo.travel.repositories.TravelRepository;

@Service
public class TravelService {
	
	private final TravelRepository repo;
	
	public TravelService(TravelRepository repo) {
		this.repo = repo;
	}
	
	public List<Travel> allTravels() {
		return repo.findAll();
	}
	
	public Travel createTravel(Travel travel) {
		return repo.save(travel);
	}
	
	public Travel findTravel(Long id) {
		
		Optional<Travel> travel = repo.findById(id);
		if (travel.isPresent()) {
			return travel.get();
		}
		else {
			return null;
		}
	}
	
	public Travel updateTravel(Travel travel) {
		
		return repo.save(travel);
	}
	
	public void deleteTravel(Long id) {
		repo.deleteById(id);
	}
}

