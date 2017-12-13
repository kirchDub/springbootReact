package com.uhg.ggmap.CrosswalkSringboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.uhg.ggmap.CrosswalkSringboot.CrosswalkRepository;
import com.uhg.ggmap.CrosswalkSringboot.NdbCirrusCrosswalk;

@Controller
@RequestMapping(path="/api")
public class Services {
	
	@Autowired
	private CrosswalkRepository crossWalkRepository;
	
	@GetMapping(path="/query")
	public @ResponseBody Iterable<NdbCirrusCrosswalk> getAllRecords(){
		return crossWalkRepository.findAll();
	}
	
	@PostMapping(path="/query/insert")
	public @ResponseBody String addNew(@RequestBody NdbCirrusCrosswalk crosswalk){
		crossWalkRepository.save(crosswalk);
		return"Saved";
	}
	
	@PostMapping(path="/query/delete")
	public @ResponseBody Iterable<NdbCirrusCrosswalk> deleteRow(@RequestBody Iterable<NdbCirrusCrosswalk> rowsToDelete){

//		crossWalkRepository.delete(rowsToDelete); uncomment this to allow deleting rows
		return crossWalkRepository.findAll();
	}
		
}
