
// property descriptor
// writeable
// enumerable
// configurable


let person = {
    name: 'naisan',
    age: 24,
    eat: function(){
        console.log('eating');
    }
}

Object.defineProperty(person,'name',{
    writable: false,    // write
    enumerable: false,  // loop
    configurable: false // delete
})

let descriptor = Object.getOwnPropertyDescriptor(person,'name');
person.name = 'sakib'
console.log(person.name);
