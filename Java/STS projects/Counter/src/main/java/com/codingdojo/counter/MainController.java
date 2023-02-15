package com.codingdojo.counter;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	@RequestMapping("/")
	public String index(HttpSession session) {

		Integer count = 0;
		Integer count2 = 0;

		if (session.getAttribute("count") == null) {
			session.setAttribute("count", 0);
		} else {
			count = (Integer) session.getAttribute("count");
			count++;
			session.setAttribute("count", count);
		}

		if (session.getAttribute("count2") == null) {
			session.setAttribute("count2", 0);
		} else {
			count2 = (Integer) session.getAttribute("count2");
			count2 += 2;
			session.setAttribute("count2", count2);
		}

		return "index.jsp";
	}

	@RequestMapping("/counter")
	public String counter() {
		return "counter.jsp";
	}

	@RequestMapping("/counter2")
	public String counterTwice() {
		return "counter2.jsp";
	}
}
