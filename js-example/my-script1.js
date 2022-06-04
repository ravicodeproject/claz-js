// Ways to Declare a JavaScript Variable

/*
addition(12, 14, true); // 676
addition(12, 14, false); // 26 

function addition(a, b, flag) {
    var result = a + b; // 26 
    if (flag) {
        result = (a + b) ** 2; //676
    }
    console.log(result);
}
*/
/*
var gblvar=200;

testFunction();

function testFunction(){
    gblvar = 300;
    let blckvar = 20;
    var gbllocal = 40;
    console.log(gblvar);//200
    console.log(blckvar);//20
    console.log(gbllocal);//40
}

console.log(gblvar);//200
//console.log(blckvar);//undefined
console.log(gbllocal);
*/

var ab = 200;
let bc = 300;
ef = 400;

function testScope(){
    var x = 10; //function scope
    let y = 12; //block scope

    var flag=true;

    if(flag){
        var a = 50;
        let b = 20;
        c = 100;
        console.log("x inside if " + x); // 10
        console.log("y inside if " + y); // 12

        console.log("a inside if " + a); //50
        console.log("b inside if " + b); //20

        console.log("c inside if " + c); // 100

        console.log("bc inside if " + bc); // 300
    }

    console.log("c inside function " + x); // 10
    console.log("c inside function " + y); // 12

    console.log("c inside function " + a); //50
    //console.log("c inside function " + b); //error

    console.log("c inside function " + c);

    console.log("bc inside function " + bc); // 300
}

testScope();

console.log("c outside function " + c); //100

console.log("bc outside function " + bc); // 300
