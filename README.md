# Bamazon

   Bamazon is a Amazon-like storefront. The app will take in orders from customers and deplete stock from the store's inventory. 

 ![picture alt](http://i37.photobucket.com/albums/e81/michaelxiong_/For%20School/bamazonGIF_zpsw5btjmlx.gif)

## NPM packages used

   * [MySQL](https://www.npmjs.com/package/mysql)

   * [Inquirer](https://www.npmjs.com/package/inquirer)
   
### To use this project, using Bash, Powershell, VS Code Terminal, etc... first type in 'node bamazon.js'

   * The app should then prompt users with two messages.

    * The first should ask "What item(choose by item ID) would you like to buy?"
    
    * The second message should ask "How many of the selected item would you like to buy?"
    
### Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
   
    * If not, the app should log the phrase "Sorry! Not enough in stock. Please try again later.", and then prevent the order from going through.
    
   * However, if your store _does_ have enough of the product, Bamazon should fulfill the customer's order.
   
    * This means the database is updated to reflect the remaining quantity.
    
    * Once the update goes through, show the customer the total cost of their purchase.
    
    * The Bamazon app would then update the inventory and display the current amount of items in stock after item(s) is/are bought.
    
### Happy Shopping!!!
