var BasicCard = require("./BasicCard.js");

var ClozeCard = function(text, cloze) {
    if (this instanceof ClozeCard) {
        this.fullText = text;
        this.cloze = cloze;

        // Creates partial text for Cloze flashcard.
        this.partial = function() {
            if (this.fullText.includes(this.cloze)) {
                return this.fullText.replace(this.cloze, '...');
            } else {
                // Broken cloze message returned when text doesn't containt cloze.
                var brokenClozeMessage = "Oops! The full text: '" + this.fullText + "' doesn't contain the cloze: '" + this.cloze + "'.";
                return brokenClozeMessage;
            }
        };ly.
    } else {
        return new ClozeCard(text, cloze);
    }
};

// Test BasicCard constructor.
var firstPresident = new BasicCard("Who was the first president of the US?", "George Washington");
console.log(firstPresident.front);
console.log(firstPresident.back);

// Test ClozeCard constructor that works.
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the US.", "George Washington");
console.log(firstPresidentCloze.fullText);
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial());

// Test ClozeCard constructor when text doesn't contain cloze.
var typoPresidentCloze = new ClozeCard("Donald Trump is the current president of the US.", "Donald Trump");
console.log(typoPresidentCloze.fullText);
console.log(typoPresidentCloze.cloze);
console.log(typoPresidentCloze.partial());

// Test constructor is scope-safe.
var missingNewCloze = ClozeCard("Roald Dahl wrote The Witches", "Roald Dahl");
console.log(missingNewCloze.fullText);
console.log(missingNewCloze.cloze);
console.log(missingNewCloze.partial());

module.exports = ClozeCard;