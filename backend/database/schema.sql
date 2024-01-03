DROP TABLE IF EXISTS recipes_pulpits;
DROP TABLE IF EXISTS ingredients_quantities_recipes;
DROP TABLE IF EXISTS quantities;
DROP TABLE IF EXISTS ingredients;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS potatoes_varieties;
DROP TABLE IF EXISTS pulpits;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES roles(id) 
);

CREATE TABLE pulpits (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  type VARCHAR(15) NOT NULL
);

CREATE TABLE potatoes_varieties (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL,
  outside_color VARCHAR(80) NOT NULL,
  inside_color VARCHAR(80) NOT NULL,
  origin VARCHAR(80) NOT NULL,
  pulpit_id INT NOT NULL,
  FOREIGN KEY (pulpit_id) REFERENCES pulpits(id)
);

CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE recipes (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(150) NOT NULL,
  difficulty VARCHAR(30) NOT NULL,
  cooking_time VARCHAR(10) NOT NULL,
  steps TEXT NOT NULL,
  category_id INT NOT NULL,
  user_id INT NOT NULL,
  is_approved BOOLEAN NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE ingredients (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE quantities (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  value INT NOT NULL,
  unit VARCHAR(10) NOT NULL
);

CREATE TABLE ingredients_quantities_recipes (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  recipe_id INT NOT NULL,
  ingredient_id INT NOT NULL,
  quantity_id INT NOT NULL,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id),
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
  FOREIGN KEY (quantity_id) REFERENCES quantities(id)
);


CREATE TABLE recipes_pulpits (
  recipe_pulpit_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  recipe_id INT NOT NULL,
  pulpit_id INT NOT NULL,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id),
  FOREIGN KEY (pulpit_id) REFERENCES pulpits(id)
);


