USE portfolio;
DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
  id INT NOT NULL AUTO_INCREMENT,
  _name VARCHAR(255),
  _info VARCHAR(255),
  _host VARCHAR(255),
  _port VARCHAR(255),
  _img VARCHAR(255),
  _key_01 VARCHAR(255),
  _key_02 VARCHAR(255),
  _key_03 VARCHAR(255),
  _key_04 VARCHAR(255),
  _key_05 VARCHAR(255),
  _key_06 VARCHAR(255),
  _key_07 VARCHAR(255),
  _key_08 VARCHAR(255),
  _key_09 VARCHAR(255),
  _key_10 VARCHAR(255),
  ts TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO projects (
_name,
_info,
_host,
_port,
_img,
_key_01,
_key_02,
_key_03,
_key_04,
_key_05,
_key_06,
_key_07,
_key_08,
_key_09,
_key_10
)
VALUES

('Zombie Asteroids',
'Kill space zombies, mine gold, and save the princess. Use arrow keys to move,
space to brake, and "q" to hard brake. Press "w" to drop space mines (requires
gold).',
'localhost',
'8081',
'',
'PC Game', 'Front-end','Javascript', 'Canvas', '', '', '', '', '', ''
),
('Conway''s Game',
'Conway''s cellular automation game of life. Try out different configurations
and appreciate beautiful mathematics.',
'localhost',
'8082',
'',
'PC Game', 'Front-end','Javascript', 'Canvas', '', '', '', '', '', ''
);