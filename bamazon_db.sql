DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products_table (
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50),
department_name VARCHAR(50),
price INTEGER(20),
stock_quantity INTEGER(20),
PRIMARY KEY (item_id)
);

INSERT INTO products_table (product_name, department_name, price, stock_quantity)
VALUES ("Echo", "Electronics", 150, 10);

INSERT INTO products_table (product_name, department_name, price, stock_quantity)
VALUES ("Furby", "Toys", 8, 5);

INSERT INTO products_table (product_name, department_name, price, stock_quantity)
VALUES ("Christmas Lights", "Home", 10, 50);

INSERT INTO products_table (product_name, department_name, price, stock_quantity)
VALUES ("Yoga Mat", "Sports", 20, 25);

INSERT INTO products_table (product_name, department_name, price, stock_quantity)
VALUES ("2018 Calendar", "Office", 12, 84);

INSERT INTO products_table (product_name, department_name, price, stock_quantity)
VALUES ("Tom's Shoes", "Clothing", 15, 38);

INSERT INTO products_table (product_name, department_name, price, stock_quantity)
VALUES ("Camping Tent", "Sports", 299, 3);

INSERT INTO products_table (product_name, department_name, price, stock_quantity)
VALUES ("Tennis Balls", "Sports", 19.99, 320);

INSERT INTO products_table (product_name, department_name, price, stock_quantity)
VALUES ("Paper Towels", "Home", 12.95, 1000);

INSERT INTO products_table (product_name, department_name, price, stock_quantity)
VALUES ("Toothbrush", "Health", 5.99, 438);