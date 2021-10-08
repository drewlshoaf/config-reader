const util = require('./src/util');
const ui = require('./src/ui');
const config = "./app.config";
const enc = 'utf8';

(async ()=> {
  let raw = await util.loadConfig(config, enc);
  let parsed = util.parseConfig(raw);
  let input = (process.argv.slice(2));
  let data, output;
  if (input.length==0) {
    data = util.getProps(parsed), 
    output = ui.start();
  } else {
    data = util.getVal(input, parsed)[0];
    output = ui.startWithArg(input);
  };
  console.log(output[0],data,output[1]);
})();