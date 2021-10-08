const util = require('./src/util');
const ui = require('./src/ui');
const config = "./app.config";

//using auto-invoked function with async/await to ensure file is loaded before we do anything else
(async ()=> {

  //load the config file
  let raw = await util.loadConfig(config);

  //parse, clean, coerce, and condition
  let parsed = util.parseConfig(raw);

  //look for passed arg
  let input = (process.argv.slice(2));
  
  //conditional flow based on presence of arg
  let data, output;
  if (input.length==0) {
    data = util.getProps(parsed), 
    output = ui.start();
  } else {
    data = util.getVal(input, parsed)[0];
    output = ui.startWithArg(input);
  };

  //output
  console.log(output[0], data, output[1]);
})();