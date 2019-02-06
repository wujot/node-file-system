var fs = require('fs');
var colors = require('colors');

/*
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
*/

fs.readdir('./', function(err, items) {

	fs.writeFile('./tekst.txt', 'List of directory items:', function(err) {
		for (var i=0; i<items.length; i++) {
	        fs.appendFile('./tekst.txt', '\n' + items[i], function(err) {
	        	if (err) throw err;
	        });
	    }
	});
});