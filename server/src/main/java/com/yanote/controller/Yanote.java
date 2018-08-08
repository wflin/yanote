package com.yanote.controller;

import com.yanote.command.YanoteCommand;
import com.yanote.model.TbYanote;
import com.yanote.service.YanoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/yanote")
public class Yanote {

    @Autowired
    private YanoteService yanoteService;

    @PostMapping
    public TbYanote addYanote(@RequestBody YanoteCommand command){
       return yanoteService.addYanote(command);
    }

    @GetMapping
    public List<TbYanote> getYanotes(){
       return yanoteService.getYanotes();
    }

}
