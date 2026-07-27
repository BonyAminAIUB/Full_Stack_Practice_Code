const phone = {
    brand : 'Redmi',
    version : 17,
    price : 30500.5,
    isThreeCamera : false,
    appsInstalled : ['fb', 'chatgpt', 'insta']
};
console.log(phone);

const car = {
    model : 'BMW',
    color : 'black',
    price : 25000000,
    accelerate: function(){
        console.log("The car has incresed it's speed");
    },
    'used year' : '1 year'  // bracket notation
};

car.accelerate();
console.log(car.model);  // GET

car.color = 'White';   // SET

console.log(car.color);
console.log(car['price']);
console.log(car['used year']);

car['used year'] = '2 year';
console.log(car['used year']);


const book = {
    title : 'Js Basics',
    'page count' : 250
};
// GET with literal string
console.log(book['title']);
console.log(book['page count']);

// GET with variable
const key = 'title';
console.log(book[key]);

// SET
book['author'] = 'Bony Amin';
console.log(book['author']);


const words = ['js', 'js', 'react', 'js', 'css'];
const counts = {};
for(const word of words){
    counts[word] = (counts[word] || 0) + 1;
}
console.log(counts);
console.log(counts['js']);


