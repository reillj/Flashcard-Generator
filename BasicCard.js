// Constructor function for Basic Card
function BasicCard(front, back) {
    this.front = front;
    this.back = back;

};

module.exports = BasicCard;

var cardData = require("./card.json");
var inquirer = require("inquirer");
var fs = require("fs");

// Call the function called BasicCard from BasicCard.js
BasicCard = new BasicCard(cardData[0].front, cardData[0].back);
console.log(BasicCard);

BasicCard.prototype.printInfo = function() {
    console.log("Front of Card: " + this.front + "\nBack of Card: " + this.back);
};

// variable we will use to count how many times our questions have been asked
var count = 0;