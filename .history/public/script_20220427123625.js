function start() {
  let HelloWorld = function () {
    this.name = "World";
    this.message = "Hello";
  };
  let helloInstance = new HelloWorld();
  console.log(helloInstance);

  helloInstance.prototype.name = "Jaska";
  helloInstance.prototype.message2 = "Goodbye";

  console.log(helloInstance.name);
  console.log(helloInstance.message2);
}
