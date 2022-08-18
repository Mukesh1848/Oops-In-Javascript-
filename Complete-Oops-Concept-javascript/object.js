console.log("Object in Javascript")

//  there are two ways to define Object in javascript 
//      1.  Object Literal 
//      2.  Object Constructor 


// Object Literal Example 


let person = {
        // Definign Object 
        name:"rahul",
        age:34,
        // methods 
        getFunction: function(){
                return (`the person name are ${person.name} and age ${person.age}`);
        },
        // Object within Object 
        Number:{
                mobile:"26478284",
                telephone:67368268
        }
}

console.log(person.getFunction());

console.log(person.Number.telephone)



//  Object Constructor Example 

function cars (isname,ismodel,iscolor){
        this.name= isname;
        this.model= ismodel;
        this.color= iscolor;
}

let car1 = new cars('toyota','zx-3','white');
console.log(car1.model);
console.log(car1.color)