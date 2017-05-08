var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      var dataString = data.toString();
      console.log(dataString);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });

};

getAndPrintHTML();