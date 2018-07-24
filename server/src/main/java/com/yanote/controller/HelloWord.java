package com.yanote.controller;


import com.yanote.model.TbUser;
import com.yanote.service.HelloWordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/hello")
public class HelloWord {

    @Autowired
    private HelloWordService helloWordService;

    @GetMapping("/word")
    public String getHello(){
        return "欢迎你啊啊的 ";
    }

    @GetMapping("/info")
    public String getInfo(){
        return "获取信息：fsdfsdfsdf ";
    }

    @GetMapping("/users")
    public List<TbUser> getUsers(){
        return helloWordService.getUsers();
    }
}
