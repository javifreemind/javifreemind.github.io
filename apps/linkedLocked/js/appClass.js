////////////////////////////////////////////////////////////////////////////////  README
//
//  Implemetation of the app using the class paradigm (OOP).


//////////////////////////////////////////////////////////////////////////////// OPTION 1: FUNCTIONS (my way)

// This is my personal and fovourite way of implement classes.
// Is based on the concept of a FUNCTION THAT RETURNS AN OBJECT.
// Then, I can create many objects just by calling that function.

function Map(coordinates, zoom) {
    // Do constructor setting statements here.
    return {
        // Properties.
        coordinates: coordinates,
        zoom: zoom,

        //Functions.
        location : function() {
            return "Coordinates: " + this.coordinates + "\nZoom: " + this.zoom;
        }
    };
}

(function main() {
    var map = Map([52.37, 4.90], 14);
})();

//////////////////////////////////////////////////////////////////////////////// OPTION 2: FUNCTIONS & PROTO (the standard)

// Define a class like this
function Map(coordinates, zoom) {
    // Add object properties like this
    this.coordinates = coordinates;
    this.zoom = zoom;
}

// Add methods like this.
Map.prototype.speak = function() {
  alert ("Coordinates: " + this.coordinates + "\nZoom: " + this.zoom);
};

// Instantiate new objects with 'new'
var map = new Map([52.37, 4.90], 14);

// Invoke methods like this
person.speak(); // alerts "Howdy, my name is Bob"

//////////////////////////////////////////////////////////////////////////////// OPTION 3: CLASSES

class Map {
  constructor(coordinates, zoom) {
    this.coordinates = coordinates;
    this.zoom = zoom;
  }
}


// Class declaration
class A {...}

// Class expression (unnamed)
var B = class {...};

// Class expression (named)
var C = class C {...};


class Polygon {
  // Special method for creating and initializing an object created with a class.
  // There can only be one "constructor" method in a class.
  // It can use the super keyword to call the constructor of a parent class.
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx*dx + dy*dy);
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Polygon(10, 10);
var p = new Polygon();
