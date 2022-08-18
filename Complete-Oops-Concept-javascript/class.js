console.log("Class in Javscript ");

// ES-6 Javascript classes Example 

class vehicles {
        constructor(name,maker,engine){
                this.name=name;
                this.maker= maker;
                this.engine=engine;
        }

        getDetails(){
                return (`the vehicles name is ${vehicles.name}`);
        }
}

let bike1= new vehicles("ninjs","kavasika,","988cc")
console.log(bike1.name)
console.log(bike1.engine)


//  Traditional Way

function fruites(day,night,afternoon){
        this.day= day;
        this.night = night;
        this.afternoon=afternoon;
};

fruites.prototype.getAllDetails = function(){
        console.log('The day of the friutes is '+ this.day);
}

let fru1 = new fruites('apple','banana','mango');
 


console.log(fru1.day)
console.log(fru1.night)
console.log(fru1.getDetails());