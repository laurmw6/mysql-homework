var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user

    displayAllFunction();
    idEntryFunction();
    quantityCheckFunction();
});

function displayAllFunction() {
    connection.query("SELECT * FROM products_table",
        function (err, results) {
            if (err) throw err;
            console.log(results)
            connection.end();
        }
    )

};

function idEntryFunction() {
    connection.query("SELECT item_id, product_name, department_name, price, stock_quantity FROM products_table",
        function (err, results) {
            if (err) throw err;
            console.log(results)
            inquirer
                .prompt({
                    type: "input",
                    message: "Enter the ID for the product you'd like to buy",
                    name: "userIdEntry",
                })
                .then(function (answer) {
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].item_id === answer.userIdEntry) {
                            console.log("Products: " + results[i].product_name);
                        }
                    };
                });
        });
}

function quantityCheckFunction() {
    connection.query("SELECT item_id, product_name, department_name, price, stock_quantity FROM products_table",
        function (err, results) {
            if (err) throw err;
            console.log(results)
            inquirer
                .prompt({
                    type: "input",
                    message: "Enter the quantity you'd like to buy",
                    name: "quantityEntered",
                })
                .then(function (answer) {
                    updatedStock = parsINT(stock_quantity) + parsINT(answer.quantityEntered);
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].stock_quantity <= answer.quantityEntered) {
                            console.log("Quantity Chosen: " + results[i].quantityEntered);
                            var sql = "UPDATE products_table SET stock_quantity = " + updatedStock + "WHERE item_id = " + userIdEntry;
                            console.log("Contratulations! You're order has been completed.")
                        }
                        else (
                            console.log("I'm sorry. Your order cannot be completed due to insufficient stock quantity.")
                        )
                    };
                });
        });
}