function start() {
  let HelloWorld = function () {
    this.name = "World";
    this.message = "Hello";
  };
  let HelloInstance = new HelloWorld();
  console.log(HelloInstance);

  HelloInstance.prototype.name = "Jaska";
  HelloInstance.prototype.message2 = "Goodbye";

  console.log(HelloInstance.name);
  console.log(HelloInstance.message2);

  let functionTest = {
    myVar: 10,
    nyFunction: function () {
      return thhis.myVar + 10;
    },
  };

  console.log(functionTest);

  let object1 = Object.create(functionTest);
  let object2 = Object.create(functionTest);

  object1.myVar = 15;
  object2.myVar = 100;
  console.log(object1.myFuncion());
  console.log(object2.myFuncion());

  console.log(object1);
  console.log(object2);
  // yhdesta allemmaista objektissa muuttuu dynamicly all prototype object
  functionTest.myVar = 50; // from which start branches
}
