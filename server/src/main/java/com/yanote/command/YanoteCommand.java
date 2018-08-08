package com.yanote.command;

import com.yanote.constant.YanoteType;
import lombok.Data;

@Data
public class YanoteCommand {

    private Long userId;

    private YanoteType noteType;

    private String noteTitle;

    private String noteContent;
}
