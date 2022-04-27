function start() {
  let HelloWorld = function () {
    this.name = "World";
    this.message = "Hello";
  };
  let helloInstance = new HelloWorld();
  console.log(helloInstance);
}
