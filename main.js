
var ClozeCard = require("./ClozeCard.js");

var inquirer = require('inquirer');

// Captures full text and cloze for cards.
var questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What is the full text for the Cloze Card?',
        default: function () {
            return 'Add your full text here.';
        }
    },
    {
        type: 'input',
        name: 'cloze',
        message: 'What is the cloze text for the Cloze Card?',
        default: function () {
            return 'Add part of your full text here.';
        }
    },
    {
            type: 'confirm',
            name: 'askAgain',
            message: 'Want to add another Cloze Card?',
            default: true
    }
];

function ask() {
    inquirer.prompt(questions).then(function (answers) {
        var newCloze = new ClozeCard(answers.text, answers.cloze);
        var fullText = newCloze.fullText;
        var cloze = newCloze.cloze;
        var partialText = newCloze.partial();
        
        // Stores new card in Firebase database.
        storeNewCloze(fullText, cloze, partialText);
        if (answers.askAgain) {
            ask();
        } else {
            console.log("Thanks for adding new flashcard(s)!");
        }
    });
}

ask();

// Stores new card in Firebase database.
function storeNewCloze(fullText, cloze, partialText) {
    database.ref().push({
        fullText: fullText,
        cloze: cloze,
        partialText: partialText
    });
};
