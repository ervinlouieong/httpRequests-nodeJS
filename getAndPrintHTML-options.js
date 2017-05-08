var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      var dataString = data.toString();
      console.log(dataString);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
