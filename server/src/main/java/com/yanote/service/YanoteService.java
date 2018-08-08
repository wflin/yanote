package com.yanote.service;

import com.yanote.command.YanoteCommand;
import com.yanote.model.TbYanote;
import com.yanote.repository.TbYanoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class YanoteService {

    @Autowired
    private TbYanoteRepository tbYanoteRepository;

    public TbYanote addYanote(YanoteCommand command){
        TbYanote tbYanote = new TbYanote();
        tbYanote.setUserId(command.getUserId());
        tbYanote.setNoteType(command.getNoteType());
        tbYanote.setNoteTitle(command.getNoteTitle());
        tbYanote.setNoteContent(command.getNoteContent());
        return tbYanoteRepository.save(tbYanote);
    }

    public List<TbYanote> getYanotes(){
        return tbYanoteRepository.findAll();
    }
}
