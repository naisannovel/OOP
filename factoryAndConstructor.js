// Factory pattern
// Constructor pattern
// about OOP four pillars - bottom


// Factory pattern

function Person1(name){
    return {
        name: name,
        eat: function(){
            console.log('eating');
        }
    }
}

// const p1 = Person1('naisan');
// console.log(p1);



// Constructor pattern

function Person2(name,age){
    this.name = name;
    this.age = age;
    this.eat = function(){
        console.log('eating');
    }
}

// const p1 = new Person2('naisan',24);
// console.log(p1);


// OOP four pillars

// 1. abstraction => property or method hide
// 2. encapsulation => property and method bind in an object
// 3. inheritance => any method or property add in my object
// 4. polymorphism => many character in many place
