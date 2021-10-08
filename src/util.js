const fs = require('fs').promises;

const types = (val)=> {
  let values = {
    undefined:  undefined, 
    null:       null, 
    true:       true, 
    on:         true, 
    yes:        true, 
    false:      false, 
    off:        true, 
    no:         false,
  }, isNumber = !isNaN(+(val));
  return isNumber && +(val) || !(val in values) && val || values[val];
};

const getProps = (arr)=> {
  let output = [];
  for (let i=0; i<arr.length; i++) {
    output.push(Object.keys(arr[i])[0]);
  };
  return output;
};

const getVal = (key, arr)=> {
  for (let i=0; i<arr.length; i++) {
    let output = [];
    if (key[0]===Object.keys(arr[i])[0]) {
      output.push(Object.keys(arr[i]).map((key)=> {return arr[i][key];})[0]);
      return output;
    };
  };
};

const loadConfig = (config)=> {
  try {
    return fs.readFile(config, 'utf-8');
  } catch (err) {
    return err;
  };
}; 

const parseConfig = (data)=> {
  let a = [];
  data.split(/\r?\n/).forEach((item)=> {
    if (item.substring(1,0)!="#") {
      let key = item.split('=')[0].trim();
      let val = types(item.split('=')[1].trim());
      a.push({[key] : val});
    }; 
  });
  return a;
};

module.exports = {
  getProps,
  getVal,
  loadConfig, 
  parseConfig,
};