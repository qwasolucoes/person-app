package br.com.company.person.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.company.person.domain.Person;

@RestController
@RequestMapping("/people")
public class PersonController {
	
	@GetMapping
	@ResponseBody
	public Person getPeople() {
		return new Person("Person name");
	}

}
