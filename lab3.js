Array.prototype.sum = function mysum() {
    let result = 0;
    this.forEach((element) => {
      if (isNaN(element)) {
        
        console.log(`Target array must contain numbers only`);
      } else {
        result = result + element;
      }
    });
    console.log(result);
  };
  [1, 2, 3].sum();







  ///////////////////////////////////////




  Object.prototype.toString = function error() {
    if (typeof this === "object") {
      return `This is an object`;
    }
  };
  const obj = {};
  String(obj); 
  
  const obj1 = { message: "This is a message" };
  const obj2 = {};
  
  Object.prototype.toString = function msg() {
    if (typeof this === "object") {
      if (this.hasOwnProperty("message")) {
        return this.message;
      } else {
        return `This is an object`;
      }
    }
  };
  
  String(obj1); 
  String(obj2);



  //////////////





  let noOfObjects = 0;

class Animals {
  constructor(color, weight) {
    if (noOfObjects > 100) {
      throw `Error Max Number of Animals That Can Be Created are 100`;
    } else {
      this.color = color;
      this.weight = weight;
      noOfObjects++;
    }
  }
  eat() {
    console.log(`I'm Eatting`);
  }
  run() {
    console.log(`I'm Running`);
  }
  walk() {
    console.log(`I'm Walking`);
  }
  attack() {
    console.log(`I'm Attacking`);
  }
}

class Bird extends Animals {
  constructor(color, weight) {
    super(color, weight);
  }
  flying() {
    console.log(`I'm Flying`);
  }
}

let cat = new Animals(`black`, 50);
let dog = new Animals(`white`, 70);
let eagle = new Bird(`white`, 5);

cat.attack();
isBird(cat);

function isBird(x) {
  if (x instanceof Bird) {
    return true;
  } else {
    return false;
  }
}