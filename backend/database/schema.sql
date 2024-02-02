DROP TABLE IF EXISTS cooking_tech_variety;
DROP TABLE IF EXISTS type;
DROP TABLE IF EXISTS ingredient_quantity_recipe;
DROP TABLE IF EXISTS quantity;
DROP TABLE IF EXISTS ingredient;
DROP TABLE IF EXISTS potatoe_variety;
DROP TABLE IF EXISTS cooking_tech;
DROP TABLE IF EXISTS recipe;
DROP TABLE IF EXISTS user;

create table user (
  id int auto_increment primary key not null,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  is_admin TINYINT NOT NULL
);

create table cooking_tech (
  id int primary key not null,
  name VARCHAR(80)
);

create table recipe (
  id int primary key not null,
  title VARCHAR(255) NOT NULL,
  difficulty VARCHAR(255) NOT NULL,
  cooking_time FLOAT NOT NULL,
  step_id INT NOT NULL,
  user_id INT NOT NULL,
  cooking_tech_id INT NOT NULL,
  is_approved TINYINT NOT NULL
);

CREATE TABLE potatoe_variety (
  id int primary key not null,
  name VARCHAR(80) NOT NULL,
  outside_color VARCHAR(80) NOT NULL,
  inside_color VARCHAR(80) NOT NULL,
  origin VARCHAR(255) NOT NULL,
  flesh VARCHAR(80) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE ingredient (
  id int primary key not null,
  name VARCHAR(30) NOT NULL
);


CREATE TABLE type (
  id int primary key not null,
  name VARCHAR(80)
);


CREATE TABLE quantity (
  id int primary key not null,
  value FLOAT NOT NULL,
  type_id INT
);

CREATE TABLE ingredient_quantity_recipe (
  id int primary key auto_increment not null,
  recipe_id INT,
  ingredient_id INT NOT NULL,
  quantity_id INT NOT NULL
);



CREATE TABLE cooking_tech_variety (
  id int primary key not null,
  cooking_tech_id INT NOT NULL,
  potatoe_variety_id INT NOT NULL
);

-- ALTER TABLE ingredient_quantity_recipe ADD FOREIGN KEY (quantity_id) REFERENCES quantity (id) ON UPDATE CASCADE;

-- ALTER TABLE ingredient_quantity_recipe ADD FOREIGN KEY (ingredient_id) REFERENCES ingredient (id) ON UPDATE CASCADE;

-- ALTER TABLE ingredient_quantity_recipe ADD FOREIGN KEY (recipe_id) REFERENCES recipe (id);

-- ALTER TABLE recipe ADD FOREIGN KEY (user_id) REFERENCES user (id);

-- ALTER TABLE cooking_tech_variety ADD FOREIGN KEY (potatoe_variety_id) REFERENCES potatoe_variety (id);

-- ALTER TABLE cooking_tech_variety ADD FOREIGN KEY (cooking_tech_id) REFERENCES cooking_tech (id);

-- ALTER TABLE recipe ADD FOREIGN KEY (step_id) REFERENCES step (id);

-- ALTER TABLE quantity ADD FOREIGN KEY (type_id) REFERENCES type (id);
