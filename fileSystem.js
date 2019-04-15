var fs = require('fs');
var http = require('http');

fs.readFile('./log.txt','utf8',function(err,content){
    if(!err)
        console.log(content);    
    else
        throw err;
})
console.log("After reading file");
// var server = http.createServer(function(request,response){
//     if(request.url === '/favicon.ico'){
//         console.log("Request fo favicon");
//     }else{
//         fs.appendFile('./log.txt',"\n"+"request from "+request.url+"at : "+ new Date(), function(err){
//             if (err)
//                 throw err;
//             console.log("Data Saved");
//         });
//         response.writeHead(200,{"Content-Type":"text/html"});
//         response.end("<html><body><h2>Logged as : "+ request.url+"</h2></body></html>"); 
//        }
//  });
//  server.listen(3000);
//  console.log("Server started at Port 3000");


// function FileWrite(){
//     var str = "Gaal ni kadni.......\n paindi aa fer dhak champion";
//     fs.appendFile('./log.txt', str+"At : "+new Date() ,function(err){
//         if (!err)
//             console.log('Data Written');
//         else
//             throw err;
//     })
// }

// FileWrite();