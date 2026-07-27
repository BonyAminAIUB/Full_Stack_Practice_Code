const phone = {
    brand : 'Redmi',
    version : 17,
    price : 30500.5,
    isThreeCamera : false,
    appsInstalled : ['fb', 'chatgpt', 'insta']
};

const keys = Object.keys(phone);
console.log(keys);
console.log(keys[2]);

const values = Object.values(phone);
console.log(values);

console.log(phone);
delete phone.isThreeCamera;
console.log(phone);

delete phone['version'];
console.log(phone);

console.log(Object.entries(phone));