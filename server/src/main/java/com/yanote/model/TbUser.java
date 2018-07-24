package com.yanote.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "tb_user")
public class TbUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private String userCode;

    @Getter
    @Setter
    private String userName;

    @Getter
    @Setter
    private String userTel;
}
