function Universe() {
  var instance;
  Unviverse = function Universe() {
    return instance;
  };
  Universe.protopye = this;
  instance = new Universe();
  instance.constructor = Universe;
  instance.size = 0;
  instance.bang = "Big";
  return instance;
}

function start() {
  let HelloWorld = function () {
    this.name = "World";
    this.message = "Hello";
  };
  let helloInstance = new HelloWorld();
  console.log(helloInstance);

  HelloWorld.prototype.name = "Jaska";
  HelloWorld.prototype.message2 = "Goodbye";

  console.log(helloInstance.name);
  console.log(helloInstance.message2);

  let functionTest = {
    myVar: 10,
    nyFunction: function () {
      return this.myVar + 10;
    },
  };

  console.log(functionTest);

  let object1 = Object.create(functionTest);
  let object2 = Object.create(functionTest);

  object1.myVar = 15;
  object2.myVar = 100;
  console.log(object1.myFunction);
  console.log(object2.myFunction);

  console.log(object1);
  console.log(object2);
  // yhdesta allemmaista objektissa muuttuu dynamicly all prototype object
  functionTest.myVar = 50; // from which start branches

  Universe.prototype.nothing = true;
  let unil = new Universe();
  console.log(uni1.nothing);

  Universe.prototype.everything = false;
  console.log(uni1.everything);
  let uni2 = new Universe();
  console.log(uni2.nothing);
  console.log(uni2.everything);
  console.log(uni1);
  console.log(uni2);
}
