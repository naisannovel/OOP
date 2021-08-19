// abstraction
// getter
// setter


function Person(user,age){

    let name = user;      // private property

    this.age = age;

    const walk = function(){        // private methods
        console.log(this.age);
    }.bind(this)

    this.eat = function(){
        console.log('eating');
        walk()
        // walk.call(this)
    }

    Object.defineProperty(this,'name',{     // getter
        get: function(){
            return name;
        },
        set: function(value){               // setter
            name = value;
        }
    })

}

const p1 = new Person('naisan',24);
p1.name = 'sakib';
console.log(p1.eat());
