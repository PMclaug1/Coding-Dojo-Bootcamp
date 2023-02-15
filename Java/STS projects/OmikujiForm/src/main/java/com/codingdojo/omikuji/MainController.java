package com.codingdojo.omikuji;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

	@RequestMapping("/omikuji")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/omikuji/show")
	public String show() {
		return "omikuji.jsp";
	}

	@RequestMapping("/send")
	public String send(
	    @RequestParam(value="number") Integer number,
	    @RequestParam(value="city") String city,
	    @RequestParam(value="person") String person,
	    @RequestParam(value="hobby") String hobby,
	    @RequestParam(value="thing") String thing,
	    @RequestParam(value="affirmation") String affirmation,
		HttpSession session){
		session.setAttribute("number", number);
		session.setAttribute("city", city);
		session.setAttribute("person", person);
		session.setAttribute("hobby", hobby);
		session.setAttribute("thing", thing);
		session.setAttribute("affirmation", affirmation);
		
	    // CODE TO PROCESS FORM ie. check email and password
	    return "redirect:/omikuji/show";
	}
}
