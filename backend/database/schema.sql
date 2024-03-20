DROP TABLE IF EXISTS cooking_tech_variety;
DROP TABLE IF EXISTS type;
DROP TABLE IF EXISTS ingredientQtRecipe;
DROP TABLE IF EXISTS quantity;
DROP TABLE IF EXISTS ingredient;
DROP TABLE IF EXISTS potato_variety;
DROP TABLE IF EXISTS cooking_tech;
DROP TABLE IF EXISTS recipe;
DROP TABLE IF EXISTS user;

create table user (
  id int auto_increment primary key not null,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  hashed_password VARCHAR(255) NOT NULL,
  is_admin TINYINT NOT NULL DEFAULT 0
);

create table cooking_tech (
  id int primary key not null AUTO_INCREMENT,
  name VARCHAR(80)
);

create table recipe (
  id int primary key not null AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  difficulty VARCHAR(255) NOT NULL,
  prep_time VARCHAR(80) NOT NULL,
  cooking_time VARCHAR(80) NOT NULL,
  steps TEXT NOT NULL,
  user_id INT NOT NULL,
  cooking_tech_id INT NOT NULL,
  is_approved TINYINT NOT NULL
);

CREATE TABLE potato_variety (
  id int primary key not null AUTO_INCREMENT,
  name VARCHAR(80) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  outside_color VARCHAR(80) NOT NULL,
  inside_color VARCHAR(80) NOT NULL,
  origin VARCHAR(255) NOT NULL,
  flesh VARCHAR(80) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE ingredient (
  id int primary key not null AUTO_INCREMENT,
  name VARCHAR(80) NOT NULL
);


CREATE TABLE type (
  id int primary key not null AUTO_INCREMENT,
  name VARCHAR(80)
);


CREATE TABLE quantity (
  id int primary key not null AUTO_INCREMENT,
  value FLOAT NOT NULL,
  type_id INT
);

CREATE TABLE ingredientQtRecipe (
  id int primary key auto_increment not null,
  recipe_id INT,
  ingredient_id INT NOT NULL,
  quantity_id INT NOT NULL
);



CREATE TABLE cooking_tech_variety (
  id int primary key not null AUTO_INCREMENT,
  cooking_tech_id INT NOT NULL,
  potato_variety_id INT NOT NULL
);


-- ALTER TABLE quantity ADD FOREIGN KEY (id) REFERENCES ingredientQtRecipe (quantity_id);

-- ALTER TABLE ingredientQtRecipe ADD FOREIGN KEY (ingredient_id) REFERENCES ingredient (id);

-- ALTER TABLE recipe ADD FOREIGN KEY (id) REFERENCES ingredientQtRecipe (recipe_id);

-- ALTER TABLE user ADD FOREIGN KEY (id) REFERENCES recipe (user_id);

-- ALTER TABLE quantity ADD FOREIGN KEY (id) REFERENCES type (id);

-- ALTER TABLE cooking_tech ADD FOREIGN KEY (id) REFERENCES recipe (cooking_tech_id);

-- ALTER TABLE cooking_tech_variety ADD FOREIGN KEY (id) REFERENCES cooking_tech (id);

-- ALTER TABLE potato_variety ADD FOREIGN KEY (id) REFERENCES cooking_tech_variety (potato_variety_id);


ALTER TABLE recipe ADD FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE CASCADE;

ALTER TABLE quantity ADD FOREIGN KEY (type_id) REFERENCES type (id);

ALTER TABLE ingredientQtRecipe ADD FOREIGN KEY (recipe_id) REFERENCES recipe (id) ON UPDATE CASCADE;

ALTER TABLE ingredientQtRecipe ADD FOREIGN KEY (quantity_id) REFERENCES quantity (id) ON UPDATE CASCADE;

ALTER TABLE ingredientQtRecipe ADD FOREIGN KEY (ingredient_id) REFERENCES ingredient (id) ON UPDATE CASCADE;

ALTER TABLE cooking_tech_variety ADD FOREIGN KEY (potato_variety_id) REFERENCES potato_variety (id);

ALTER TABLE cooking_tech_variety ADD FOREIGN KEY (cooking_tech_id) REFERENCES cooking_tech (id);

