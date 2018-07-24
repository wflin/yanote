package com.yanote.repository;

import com.yanote.model.TbUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TbUserRepository extends JpaRepository<TbUser, Long> {

    TbUser findByUserName(String userName);
}
