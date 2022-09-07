class cocktailMenu {
    constructor(name,price) 
    {
        this.name = name; 
        this.price = price;
    }
}
// need items and price to print 
class order {
    constructor(order)
    {
        this.order = [];
    }
    addDrink(drink)
    {
        this.order.push(drink);
    }
    deleteDrink(dItem)
    {
        this.order.splice(dItem,1);
        console.log("Drink # "+ dItem +" will no longer be made")
    }
    orderTotal()
    {
        var total = 0;
        for (var i = 0; i <this.order.length;i++)
        {
            total += Object.values(this.order[i])[1] ;
        }  
        console.log("Your total is: $" +total)  
    }
    returnOrder()
    {
        for (var i = 0; i <this.order.length;i++)
        {
            console.log("Item; " + Object.values(this.order[i])[0] +"\n" + "Price; " + '$' +Object.values(this.order[i])[1] ) ;
        }       
    }
}
// Seperate what the console logs with "-"
var menu = new order()
var moscow = new cocktailMenu("Moscow Mule",10)
var margarita = new cocktailMenu("Margarita",12)
var jack = new cocktailMenu('Jack & Coke',9)
var water = new cocktailMenu('Water',3)

var input;
while (input != 0)
{
    input = prompt(`
    Hello welcome to Jose's Bar! 
    What can i get you started with?
    1) Moscow Mule $10
    2) Margarita $12
    3) Jack & Coke $9
    4) Water $3
    5) View Current Order
    6) Delete an item
    7) Complete and Pay. 
    `);
    if(input == 1) {
        menu.addDrink(moscow)
    }
    else if(input ==2) {
        menu.addDrink(margarita)
    } 
    else if(input == 3) {
        menu.addDrink(jack)
    } 
    else if(input == 4) {
        menu.addDrink(water)
    } 
    else if (input == 5) {
        console.log('----------------------')
        menu.returnOrder()
    }
    else if(input == 6)
    {
        console.log("----------------------")
        menu.returnOrder() 
    var input2 = prompt(`
    Starting from zero and at the top, what # drink would you like removed? 
    `);
        menu.deleteDrink(input2)
    }
    else if(input == 7)
    {
        menu.orderTotal() 
        input = 0
        console.log("Thanks for chosing Joses, have a good one!")
    }
    else
    {
        alert("Invalid choice, please try again.")
    }
            
}




