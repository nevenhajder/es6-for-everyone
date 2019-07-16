const details = ['Wes Bos', 123, 'wesbos.com'];
const [name, id, website] = details;
console.log(name);
console.log(id);
console.log(website);
console.log('-----');

const data = 'Basketball,sports,90210,wes,bos,cool';
const [itemName, category, sku, inventory] = data.split(',');
console.log(itemName);
console.log(category);
console.log(sku);
console.log(inventory);
console.log('-----');

const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];
const [captain, assistant, ...players] = team;
console.log(captain);
console.log(assistant);
console.log(players);
console.log('-----');
