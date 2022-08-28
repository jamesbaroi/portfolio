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

('Periodic Table',
'Vertically responsive periodic table of the elements. Click on each element
to view more information.',
'10.0.0.240',
'8182',
'',
'CSS', 'SCSS', 'MySQL', 'Science', 'Chemistry', 'Education', 'Resource', '', '', ''
);