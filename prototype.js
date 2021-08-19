
// prototype
// reset constructor property
// Object.create() method
// Object.assign() method
// instance member
// prototype member
// object.keys()
// for loop for get all method and property also parent/prototype method
// super call


function Method(color){
    this.skinColor = color
}
Method.prototype.walk = function(){
    console.log('walking');
}

function Person(name,age,color){      // in Person, all properties and methods are instance member

    Method.call(this,color)            // super call

    this.name = name;

    this.age = age;

    this.eat = function(){
        console.log('eating');
    }
}

Person.prototype = Object.create(Method.prototype);         // Object.create() method

Person.prototype.constructor = Person;      // reset constructor property

Object.assign(Person.prototype, Method.prototype);          // Object.assign() method

Person.prototype.swim = function(){     // all method in prototype are prototype member
    console.log('swim');
}

let x = new Person('naisan',24,'black')

let keys = Object.keys(x);      // object.keys() use for get all property and method except prototype method because prototype method are parent method
