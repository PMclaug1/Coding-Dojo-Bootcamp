package com.codingdojo.roster.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.roster.models.Course;
import com.codingdojo.roster.models.Student;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long> {
	List<Course> findAll();
	List<Course> findAllByStudents(Student student);
	List<Course> findByStudentsNotContains(Student student);
}
