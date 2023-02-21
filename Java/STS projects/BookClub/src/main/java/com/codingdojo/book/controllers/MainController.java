package com.codingdojo.book.controllers;

import javax.servlet.http.HttpSession;
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
import org.springframework.web.bind.annotation.PutMapping;

import com.codingdojo.book.models.Book;
import com.codingdojo.book.services.BookService;

@Controller
public class MainController {

	@Autowired
	private BookService bookService;

	// Display book form
	@GetMapping("/books/new")
	public String showBookForm(Model model, HttpSession session) {

		model.addAttribute("newBook", new Book());

		if (session.getAttribute("userId") == null) {
			return "redirect:/home";
		}

		return "newBook.jsp";
	}

	// process book submission
	@PostMapping("/books/new")
	public String processBookForm(@Valid @ModelAttribute("newBook") Book book, BindingResult result, Model model,
			HttpSession session) {
		if (result.hasErrors()) {
			return "newBook.jsp";
		} else {
			bookService.addBook(book);
			return "redirect:/home";
		}

	}

	// Edit
	// Get method to show our edit form
	@GetMapping("/books/edit/{id}")
	public String ShowEditBookForm(@PathVariable("id") Long id, Model model, HttpSession session) {
		Book book = bookService.findBook(id);
		model.addAttribute("book", book);

//		if (book.getMember().getId() != (Long) session.getAttribute("userId")) {
//			return "redirect:/home";
//		}

		return "editBook.jsp";

	}

	// process edit form 
	@PutMapping("/books/edit/{id}")
	public String editBook(@Valid @ModelAttribute("book") Book book, BindingResult result) {

		if (result.hasErrors()) {
			return "editBook.jsp";
		} else {
			bookService.updateBook(book);
			return "redirect:/home";
		}

	}

	// Show One
	@GetMapping("/books/{id}")
	public String showDonation(@PathVariable("id") Long id, Model model) {
		Book book = bookService.findBook(id);
		model.addAttribute("book", book);
		return "showBook.jsp";
	}

	// Delete and redirect to dash board
	@DeleteMapping("books/delete/{id}")
	public String deleteBook(@PathVariable("id") Long id) {
		bookService.deleteBook(id);
		return "redirect:/home";
	}

}