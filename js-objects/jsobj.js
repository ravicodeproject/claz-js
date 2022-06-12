// we create objects in 4 different ways
// Create a single object, with the keyword new.
let car1 = new Object();
car1.wheels=4;
car1.petrol=5; //ltrs
car1.driving=function(){
    console.log(this.wheels);
    console.log(this.petrol);
}

// Create a single object, using an object literal.
let car2 = {};
car2.wheels=4;
car2.petrol=5; //ltrs
car2.driving=function(){
    console.log(this.wheels);
    console.log(this.petrol);
}

// Create an object using Object.create().
let car3 = Object.create(null);
car3.wheels=4;
car3.petrol=5; //ltrs
car3.driving=function(){
    console.log(this.wheels);
    console.log(this.petrol);
}

// Create an object using Object.create().
let car4 = Object.create({
    bootspace:250
});
car4.wheels=4;
car4.petrol=5; //ltrs
car4.driving=function(){
    console.log(this.wheels);
    console.log(this.petrol);
    console.log(this.bootspace);
}

// Create an object using Object.create().
let car5 = {
    wheels:4,
    petrol:5,
    airbags:7,
    bootspace:250,
    showFeatures:function(){
        console.log(this.wheels);
        console.log(this.petrol);
        console.log(this.bootspace);
        console.log(this.airbags);
    }
};
//Define an object constructor, and then create objects of the constructed type.
function Car(wheels,petrol,airbags){
    this.wheels=wheels;
    this.petrol=petrol;
    this.bootspace=250;
    this.airbags=airbags;
    this.showFeatures=function(){
        console.log("showing features");
        console.log(this.wheels);
        console.log(this.petrol);
        console.log(this.bootspace);
        console.log(this.airbags);
    }
}

function travel(){
    car1.driving();
    car2.driving();
    car3.driving();
    car4.driving();
}
travel();

function showroom(){
    let car20lakhs=new Car(4,20,7);
    car20lakhs.showFeatures();

    let car15lakhs=new Car(4,15,4);
    car15lakhs.showFeatures();

    let car10lakhs=new Car(4,10,2);
    car10lakhs.showFeatures();
}

showroom();