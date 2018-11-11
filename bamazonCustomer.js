var mysql = require("mysql");
var inquirer = require("inquirer");

var space = "==========================================================================";

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3307,

  // Your username
  user: "root",

  // Your password
  password: "myBootcamp7",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

//=================================Inquirer introduction===============================

function start() {

  inquirer.prompt([{

    type: "confirm",
    name: "confirm",
    message: "Welcome! Would you like to view Bamazon's inventory?",
    default: true

  }]).then(function (user) {
    if (user.confirm === true) {
      display();
    } else {
      console.log("That's fine, come again!");
    }
  });
}

//function which displays all available items that can be purhased
function display() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res);
    //connection.end();
    purchase()
  });
}


// function to purchase selected items and amount
function purchase() {
  // prompt for info about the item being sold on Bamazon
  inquirer
    .prompt([
      {
        name: "input_item_id",
        type: "input",
        message: "What item(choose by item ID) would you like to buy?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "input_stock_quantity",
        type: "input",
        message: "How many of the selected item would you like to buy?"
      }

    ]).then(function (userPurchase) {

      //connect to database to find stock_quantity in database. If user quantity input is greater than stock, decline purchase.

      connection.query("SELECT * FROM products WHERE item_id=?", userPurchase.input_item_id, function (err, res) {
        for (var i = 0; i < res.length; i++) {
          //========If user ask for more than what Bamazon have in stock=====================                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ik
          if (userPurchase.input_stock_quantity > res[i].stock_quantity) {

            console.log(space);
            console.log("Sorry! Not enough in stock. Please try again later.");
            console.log(space);
            start();

          } else {
            //=========Check-Out===============================
            console.log(space);
            console.log("Awesome! We can fulfull your order.");
            console.log(space);
            console.log("You've selected:");
            console.log("===============================");
            console.log("||  Item: " + res[i].product_name);
            console.log("||  Department: " + res[i].department_name);
            console.log("||  Total Cost: " + res[i].price);
            console.log("||  Quantity: " + userPurchase.input_stock_quantity);
            console.log("===============================");
            console.log("Total: " + res[i].price * userPurchase.input_stock_quantity);
            console.log(space);

            var new_stock_quantity = (res[i].stock_quantity - userPurchase.input_stock_quantity);
            //console.log(new_stock_quantity);
            var new_input_id = (userPurchase.input_item_id);
            //console.log(new_input_id);
            confirmPrompt(new_stock_quantity, new_input_id);
          }
        }
      });
    });
}

//=================================Confirm Purchase===============================

function confirmPrompt(new_stock_quantity, new_input_id) {

  inquirer.prompt([{

    type: "confirm",
    name: "confirmPurchase",
    message: "Are you sure you would like to purchase this item and quantity?",
    default: true

  }]).then(function (userConfirm) {
    if (userConfirm.confirmPurchase === true) {

      //if user confirms purchase, update mysql database with new stock quantity by subtracting user quantity purchased.

      connection.query("UPDATE products SET ? WHERE ?", [{
        stock_quantity: new_stock_quantity
      }, {
        item_id: new_input_id
      }], function (err, res) { });

      console.log(space);
      console.log("Transaction completed!");
      console.log(space);
      console.log("Updating Inventory....");
      console.log(space);
      console.log("Inventory Updated!");
      updateInventoryDisplay();

    } else {
      console.log(space);
      console.log("That's fine, come again!");
      console.log(space);
      start();
    }
  });
}

function updateInventoryDisplay() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res);
    //connection.end();
    start();
  });
}