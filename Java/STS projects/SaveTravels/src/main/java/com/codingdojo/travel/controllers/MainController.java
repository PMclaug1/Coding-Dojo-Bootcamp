package com.codingdojo.travel.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.travel.models.Travel;
import com.codingdojo.travel.services.TravelService;

@Controller
public class MainController {
	@Autowired
	TravelService travelService;

	@GetMapping("/")
	public String home() {
		return "redirect:/expenses";
	}

	@GetMapping("/expenses/{travelId}")
	public String index(Model model, @PathVariable("travelId") Long travelId) {

		model.addAttribute("travel", travelService.findTravel(travelId));
		return "show.jsp";
	}


	@RequestMapping("/expenses")
	public String index(@ModelAttribute("travel") Travel travel, Model model) {
		List<Travel> travels = travelService.allTravels();
		model.addAttribute("travels", travels);
		return "expenses.jsp";
	}

	@PostMapping("/expenses")
	public String create(@Valid @ModelAttribute("travel") Travel travel, BindingResult result) {
		if (result.hasErrors()) {
			return "expenses.jsp";
		} else {
			travelService.createTravel(travel);
			return "redirect:/expenses";
		}
		}

	@RequestMapping("/expenses/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		Travel travel = travelService.findTravel(id);
		model.addAttribute("travel", travel);
		return "edit.jsp";
	}

	@RequestMapping(value = "/expenses/{id}", method = RequestMethod.PUT)
	public String update(@Valid @ModelAttribute("travel") Travel travel, BindingResult result) {
		if (result.hasErrors()) {
			return "edit.jsp";
		} else {
			travelService.updateTravel(travel);
			return "redirect:/expenses";
		}
	}
	
    @DeleteMapping("/expenses/{id}")
    public String destroy(@PathVariable("id") Long id) {
        travelService.deleteTravel(id);
        return "redirect:/expenses";
    }
}



