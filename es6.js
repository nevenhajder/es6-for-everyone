const listItems = document.querySelectorAll('li');

// Error! listItems.map is not a function
// const mappedItems = listItems.map(item => item.textContent);


// Converts array-like or iterable object to an array
// const listItemsArray = Array.from(listItems);
// const mappedItemsFromArray = listItemsArray.map(item => item.textContent);


// Array.from also takes a map function as its second parameter
const mappedItems = Array.from(listItems, item => item.textContent);