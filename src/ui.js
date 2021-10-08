const nl='';
const start = ()=> {
  msgPre = [
    nl,
    'Welcome to config-reader. The app.config properties are: ',
    nl, nl,
  ].join('\r\n'),
  msgPost = [
    nl, nl,
    'To view the value of a property, start config-reader appending the name of the property, like:',
    nl,
    '   `npm start host`',
    nl,
    '    returns => `The value of `host` is:  test.com`',
    nl,
  ].join('\r\n');
  return [msgPre, msgPost];
};

const startWithArg = (input)=> {
  let msgPre = [
    nl,
    'The value of `' + input +  '` is: ',
  ].join('\r\n'),
  msgPost = [
    nl, nl
  ].join('\r\n');
  return [msgPre, msgPost];
};

module.exports = {
  start,
  startWithArg,
};