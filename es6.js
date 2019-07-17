const listItems = document.querySelectorAll('li');

// Iterate over Node List using a traditional for loop
// for (var i=0; i < listItems.length; i++) {
//     listItems[i].textContent = `list item ${i + 1}`;
// }


// Node List has the forEach method!
// listItems.forEach((el, i) => el.textContent = `list item ${i + 1}`);


// Iterates over the prototype methods and properties!!!
// for (const index in listItems) {
//     console.log(index);
// }


// Can use break or continue
for (const [index, item] of listItems.entries()) {
    if (index === 2) {
        continue;
    }
    item.textContent = `list item ${index + 1}`;
}