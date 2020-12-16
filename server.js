var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) 
{
  response.writeHead(200, {"Content-Type": "text/html"});
  
  //read the secret values from a file
  fs.readFile('/etc/secret/password', 'UTF-8', (err, fileData) => {
    if(err)
    {
      response.write("ERROR in reading secret value from volume");
      response.end();
    }
    else
    {
      response.write("Password (read from volume): " +fileData);
      response.end();
    }
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Application listening on ${port}`));
