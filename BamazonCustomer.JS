var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to purchase?",
      choices: [
        "Search by Item ID",
        "Search by Product Name",
        "Search by Department",
        "Search by Price Range",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Search by Item ID":
        itemIdSearch();
        break;

      case "Search by Product Name":
        productSearch();
        break;

      case "Search by Department":
        departmentSearch();
        break;

      case "Search by Price Range":
        rangeSearch();
        break;
          
      case "exit":
        connection.end();
        break;
      }
    });
}
function itemIdSearch() {
  inquirer
    .prompt({
      name: "Item ID",
      type: "input",
      message: "Search product by Item ID"
    })
    .then(function(answer) {
      console.log(answer.Item_ID);
      connection.query("SELECT * FROM BamazonCustomer WHERE ?", { Product_Name: answer.Product_Name }, function(err, res) {
        console.log(
            " || Item ID: " + res[0].Item_ID +
            " || Product Name: " + res[0].Product_Name +
            " || Department Name: " + res[0].Department_Name +
            " || Price: " + res[0].Price + 
            " || Stock Quantity: " + res[0].Stock_Quantity
        );
        runSearch();
      });
    });
}
function productSearch() {
  inquirer
    .prompt({
      name: "Product",
      type: "input",
      message: "What product are you looking for?"
    })
    .then(function(answer) {
      console.log(answer.Product_Name);
      connection.query("SELECT * FROM BamazonCustomer WHERE ?", { Product_Name: answer.Product_Name }, function(err, res) {
        console.log(
            " || Item ID: " + res[0].Item_ID +
            " || Product Name: " + res[0].Product_Name +
            " || Department Name: " + res[0].Department_Name +
            " || Price: " + res[0].Price + 
            " || Stock Quantity: " + res[0].Stock_Quantity
        );
        runSearch();
      });
    });
}
function departmentSearch() {
  inquirer
    .prompt({
      name: "Product",
      type: "input",
      message: "What department are you looking for?"
    })
    .then(function(answer) {
      console.log(answer.Department_Name);
      connection.query("SELECT * FROM BamazonCustomer WHERE ?", { Product_Name: answer.Product_Name }, function(err, res) {
        console.log(
            " || Item ID: " + res[0].Item_ID +
            " || Product Name: " + res[0].Product_Name +
            " || Department Name: " + res[0].Department_Name +
            " || Price: " + res[0].Price + 
            " || Stock Quantity: " + res[0].Stock_Quantity
        );
        runSearch();
      });
    });
}
function rangeSearch() {
  inquirer
    .prompt({
      name: "Product",
      type: "input",
      message: "Price range?"
    })
    .then(function(answer) {
      console.log(answer.Price);
      connection.query("SELECT * FROM BamazonCustomer WHERE ?", { Product_Name: answer.Product_Name }, function(err, res) {
        console.log(
            " || Item ID: " + res[0].Item_ID +
            " || Product Name: " + res[0].Product_Name +
            " || Department Name: " + res[0].Department_Name +
            " || Price: " + res[0].Price + 
            " || Stock Quantity: " + res[0].Stock_Quantity
        );
        runSearch();
      });
    });
}
