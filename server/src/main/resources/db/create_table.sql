set sql_notes = 0;

DROP TABLE IF EXISTS tb_user;
DROP TABLE IF EXISTS tb_yanote;


-- 用户表
CREATE TABLE tb_user (
  id BIGINT NOT NULL AUTO_INCREMENT comment 'id',
  user_code varchar(16) NOT NULL comment '用户代码',
  user_name varchar(16) NOT NULL comment '用户名称',
  user_tel varchar(11) DEFAULT NULL comment '联系电话',
  PRIMARY KEY (id)
) CHARACTER SET = utf8 comment '用户信息表'

-- 笔记表
CREATE TABLE tb_yanote (
  id BIGINT NOT NULL AUTO_INCREMENT comment 'id',
  user_id BIGINT NOT NULL comment '用户代码',
  note_type varchar(16) NOT NULL comment '笔记类型',
  note_title varchar(60) DEFAULT NULL comment '笔记标题',
  note_content varchar(255) DEFAULT NULL comment '笔记内容',
  note_images varchar(255) DEFAULT NULL comment '笔记图片',
  PRIMARY KEY (id)
) CHARACTER SET = utf8 comment '笔记表'
