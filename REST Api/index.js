/*
  App 1: REST Api for uptime monitoring App
  No npm, No dependencies, No framework
  Use case:
    Node library is only accessible tool
    Will refactor later with test cases
    Uptime monitoring app: View status of url and let me know if its up or if it goes down that it's down for how long
    Get uptime alerts by SMS instead of email

  API Requirements should
    - Listen on port
    - Accept HTTP POST,GET,PUT,DELETE,HEAD
    - Add user edit user delete user
    - Sign in, get token and use token to do authenticated requests
    - Sign out and invalidate token
    - Signed in user can initiate check for url and define what Up and down mean
    - Signed in user can edit or delete any of their checks
    - In the background perform the checks at appropriate times and send alerts when state is changed
    - To use SMS use Twillio api with node
*/

var http = require('http')
var url = require('url')
var stringopener = require('string_decoder').StringDecoder
var server = http.createServer(function(req,res){
      var parsedUrl = url.parse(req.url,true)
      var path = parsedUrl.pathname
      var trimmedPath = path.replace(/^\/+|\/+$/g, '')
      var httpmethod = req.method.toLowerCase()
      var queryStringObj = parsedUrl.query
      var headersObj = req.headers
      var decoder = new stringopener('utf-8')
      var buff =''
      req.on('data',function(data){
            buff+=decoder.write(data)
      })
      req.on('end', function(){
            buff += decoder.end()
            res.end('Nopop')
            console.log(buff)
      })
});

server.listen(3120,function(){
      console.log("3120 talking...")
})
var handlers = {}
handlers.sample = function(data,callback){

}

handlers.notFound = function(data,callback){

}

var router = {
      'sample': handlers.sample,

}
