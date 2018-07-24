package com.yanote.service;

import com.yanote.model.TbUser;
import com.yanote.repository.TbUserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class HelloWordService {

    @Autowired
    private TbUserRepository tbUserRepository;

    public List<TbUser> getUsers(){
        return tbUserRepository.findAll();
    }
}
