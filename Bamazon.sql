CREATE DATABASE Bamazon_db;

USE Bamazon_db;

CREATE TABLE BamazonCustomer (
  Item_ID INTEGER(30) NOT NULL,
  Product_Name VARCHAR(30) NOT NULL,
  Department_Name VARCHAR(30) NOT NULL,
  Price INTEGER NOT NULL,
  Stock_Quantity INTEGER NOT NULL,
  PRIMARY KEY (Item_ID)
);



SELECT * FROM BamazonCustomer;