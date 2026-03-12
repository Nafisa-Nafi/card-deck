const deck = document.querySelector('.deck');

/*
    Step 1: Fetch data from your JSON file by:
    - Inside of the getCards() function, use fetch() to load data.json
    - Convert the response to JavaScript using .json()
    - Call displayCards() with the data
*/

function getCards() {
    // Your code here for Step 1
}


/*
    Step 2: Display the cards
    - Inside the for loop, loop through the array of card objects
    - For each card, create HTML elements (using div, p, img, etc.)
    - Append each card to the .deck container

    Step 3: Add interactivity
    - After creating the HTML elemetns, add at least one event listener to each card
    - Some ideas: click to flip, highlight, show more info, etc.
*/

function displayCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        // Your code here for Step 2 + 3
    }
}



// DO NOT TOUCH (Starts loading the data)
getCards();
