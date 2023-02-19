package com.codingdojo.ninja.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.ninja.models.Dojo;
import com.codingdojo.ninja.models.Ninja;
import com.codingdojo.ninja.services.DojoService;
import com.codingdojo.ninja.services.NinjaService;

@Controller
public class MainController {
	@Autowired
	private DojoService dojoService;
	
	@Autowired
	private NinjaService ninjaService;
	
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("dojos", dojoService.allDojos());
		return "index.jsp";
	}
	
	@GetMapping("/dojos/new")
	public String newDojo(@ModelAttribute("dojo") Dojo dojo) {
		return "newDojo.jsp";
	}
	
	@PostMapping("/dojos/new")
	public String addDojo(@ModelAttribute("dojo") Dojo dojo) {
		dojoService.addDojo(dojo);
		return "redirect:/";
	}
	
	@GetMapping("/ninjas/new")
	public String newNinja(@ModelAttribute("ninja") Ninja ninja, Model model) {
		model.addAttribute("dojos", dojoService.allDojos());
		return "newNinja.jsp";
	}
	
	@PostMapping("/ninjas/new")
	public String addNinja(@ModelAttribute("ninja") Ninja ninja) {
		ninjaService.addNinja(ninja);
		return "redirect:/";
	}
	
	@GetMapping("/dojos/{id}")
	public String viewDojos(@PathVariable("id") Long id, Model model) {
		model.addAttribute("dojo", dojoService.findDojo(id));
		model.addAttribute("ninjas", ninjaService.dojoNinjas(id));
		return "viewDojos.jsp";
	}

	
	@GetMapping("/ninjas/remove/{id}")
	public String removeNinja(@PathVariable("id") Long id) {
		ninjaService.removeFromDojo(ninjaService.findNinja(id));
		return "redirect:/";
	}
}
