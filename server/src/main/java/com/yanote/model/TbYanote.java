package com.yanote.model;

import com.yanote.constant.YanoteType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "tb_yanote")
public class TbYanote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private Long userId;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    private YanoteType noteType;

    @Getter
    @Setter
    private String noteTitle;

    @Getter
    @Setter
    private String noteContent;

    @Getter
    @Setter
    private String noteImages;
}
