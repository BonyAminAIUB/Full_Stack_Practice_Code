var a = 20;

function one(){
    var a = 30;
    console.log(a);
    two();
    console.log("I am function one");
}

function two(){
    three();
    console.log("I am function two");
}

function three(){
    console.log("I am function three");
}

var b = 200;

one();

var c = 100;