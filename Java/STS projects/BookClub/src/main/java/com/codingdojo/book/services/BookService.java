package com.codingdojo.book.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.book.models.Book;
import com.codingdojo.book.repositories.BookRepository;

@Service
public class BookService {
	private final BookRepository bookRepo;

	public BookService(BookRepository bookRepo) {
		this.bookRepo = bookRepo;
	}
//get all
	public List<Book> allBooks() {
		return bookRepo.findAll();
	}
//create
	public Book addBook(Book book) {
		return bookRepo.save(book);
	}
//update
	public Book updateBook(Book book) {
		return bookRepo.save(book);
	}
//get one
	public Book findBook(Long id) {
		Optional<Book> optionalBook = bookRepo.findById(id);
		if (optionalBook.isPresent()) {
			return optionalBook.get();
		} else {
			return null;
		}

	}

	// Delete
	public void deleteBook(Long id) {
		bookRepo.deleteById(id);
	}
}