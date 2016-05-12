////////////////////////////////////////////////////////////////////////////////  README
//
//  Implemetation of the app using the single object paradigm (javascript OOP).

////////////////////////////////////////////////////////////////////////////////  GUIDELINES

// Namespaces are objects in javascript!
var namespace  = {

};

// Simple object
var obj = {
  foo: function() {},
  bar: function() {}
};

// Abreviation
var obj = {
  foo() {},
  bar() {}
};

// Methods defidition
var obj = {
  property( parameters… ) {},
  *generator( parameters… ) {},
// also with computed keys:
  [property]( parameters… ) {},
  *[generator]( parameters… ) {},
// compare ES5 getter/setter syntax:
  get property() {},
  set property(value) {}
};
