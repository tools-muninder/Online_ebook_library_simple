var http = require("http");
url = require("url");
var routing = require('./BookRouting')
var net = require('net')
var server = http.createServer((request,response)=>{
    if(request.url === "/favicon.ico"){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.end();
        return;
    }else{
        var url_parts = url.parse(request.url);
        routing.enableRoute(url_parts,request,response)
    }
});
server.listen(3000);
console.log("SERVER Started at PORT: 3000");

// var TCP_server = net.createServer(function(c){
//     console.log('Client Connected');
//     c.on('data',function(data){
//         c.write(data);
//     });
//     c.on('close',function(){
//         console.log('Client Disconnected');
//     });
// });
// TCP_server.listen(1234,function(){
//     console.log('TCP server Started');
// });
























// var server = http.createServer(function(request,response){          // USING GET REQUEST
//     var path = url.parse(request.url).pathname;
//     var query = url.parse(request.url).query;
//     var name = querystring.parse(query)["Username"];
//     var password = querystring.parse(query)["Password"];
//     result = module.authenticateUser(name,password);
//     response.writeHead(200,{"Content-Type":"text/html"});
//     response.end(result);
    
//     console.log("Request Received");
// });
// var server = http.createServer(                      // USING POST REQUEST
//     function(request,response){
//         data1 = '';
//         request.on('data',function(chunk){
//             data1 += chunk;
//         });
//         request.on('end',function(){
//             qs = querystring.parse(data1);
//             name = qs['Username'];
//             password = qs['Password'];
            
//             result = module.authenticateUser(name,password);
//             response.writeHead(200,{"Content-Type":"text/html"});
//             console.log(qs);
//             response.end(result);
//         });
//         console.log("Request Received");
//     }
// );
