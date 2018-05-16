var connect = require('connect');
var random_insult = require('./randominsult.js');
var app = connect();

//adding in our middleware
var helloworld = function ( request , response , next ){
  response.setHeader('Content-Type', 'text/plain');
  response.write('Hello World');
  response.end();
};
var goodbyeworld = function (request, response, next){
  response.setHeader('connect-Type', 'text-plain');
  response.write('GoodByeWorld');
  response.end();
};
//insulting middleware
var insultme = function (reuest, response, next){
  response.setHeader('connect-Type', 'text-plain');

  random_insult.get_insult(function (insult) {
    response.end(insult);
  });
};

app.use('/hello', helloworld);
app.use('/goodbye', goodbyeworld);
app.use('/insultme', insultme);

app.listen(3001);
console.log( 'server running at http://localhost3001');
