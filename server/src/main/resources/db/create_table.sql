set sql_notes = 0;

DROP TABLE IF EXISTS tb_user;


-- 用户表

CREATE TABLE tb_user (
  id BIGINT NOT NULL AUTO_INCREMENT comment 'id',
  user_code varchar(16) NOT NULL comment '用户代码',
  user_name varchar(16) NOT NULL comment '用户名称',
  user_tel varchar(11) DEFAULT NULL comment '联系电话',
  PRIMARY KEY (id)
) CHARACTER SET = utf8 comment '用户信息表'
