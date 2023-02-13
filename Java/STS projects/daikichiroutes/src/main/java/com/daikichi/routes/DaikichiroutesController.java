package com.daikichi.routes;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/daikichi")
public class DaikichiroutesController {
    @RequestMapping("")
    public String index(){
      return "Welcome!";
    }
    @RequestMapping("/today")
    public String hello(){
      return "Today you will find luck in all your endeavors!";
    }
    @RequestMapping("/tomorrow")
    public String world(){
      return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
    }
    @RequestMapping("/search/")
    public String index(@RequestParam(value="q", required=false) String searchQuery) {
        return "You searched for: " + searchQuery;
    }
    @RequestMapping("/travel/{city}")
    public String showTravel(@PathVariable("city") String city){
    	return "Congratulations! You will soon travel to " + city;
    }
    @RequestMapping("/lotto/{num}")
    public String showLotto(@PathVariable("num") Integer num){
    	if(num%2 == 0)
    	return "You will take a grand journey in the near future, but be weary of tempting offers.";
    	else 
    		return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
    	}
    }
    
