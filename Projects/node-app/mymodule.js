function moduleFunction()
{
  //global.console.log(module);
  global.console.log("This is a global console log");

  console.log(__filename);
  console.log(__dirname);

  // global.setTimeout(() => {
  // global.console.log("global.setTimeout()");
  // }, 3000);
}

module.exports.moduleFunction = moduleFunction;