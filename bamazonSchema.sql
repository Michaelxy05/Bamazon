DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (100) NOT NULL,
  department_name VARCHAR (45) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INT (255) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Charizard 1st Edition", "Toys", 2000, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gameboy Advance", "Toys", 50, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grand Turismo 2", "Video Game", 54.98, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nicholas Cage Pillow Case", "Bed and Bath", 0.25, 255);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Joe Montana 49ers Jersey", "Clothing", 280, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Used Toothbrush", "Bed and Bath", 2.75, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Magic Cupboard", "Bed and Bath", 9999.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PF Flyers Sneakers", "Clothing", 50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grays Sport Almanac 2010-2060", "Books", 10000000, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Game of Thrones 1000 Years After Jon Snow", "Books", 29.95, 135);



select *from products;