const fs = require('fs');
const resquest = require('request');

let pageContent = {}


resquest('http://www.example.edu/', (error, response, body) => {
  pageContent.error = ('error:', error);
  pageContent.status = ('statusCode:', response && response.statusCode);
  pageContent.body = ('body:', body); 
  
  fs.writeFile('mynewfile3.txt', (pageContent.error + pageContent.status + pageContent.body), function (err) {
  if (err) throw err;
  console.log('Saved!');
  })
}
);


//tu put inside the response as a callback event
