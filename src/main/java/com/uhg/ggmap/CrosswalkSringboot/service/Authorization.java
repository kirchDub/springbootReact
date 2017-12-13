package com.uhg.ggmap.CrosswalkSringboot.service;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/api")
public class Authorization {
	
	@GetMapping(path="/current_user")
	public @ResponseBody boolean getCurrentUser(){
		return false;
	}

}
