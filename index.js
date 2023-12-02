const andi = require('./module');
const http = require('http');
const moment = require('moment');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/home': home(res); break;
        case '/': welcome(res); break;
        default: page404(res); break;
    }
});

const home = res => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html'); 
    res.write('<pre>'); 
    res.write(JSON.stringify({
        status: 'successfully',
        message: 'Welcome World',
        study: 'Node JS',
        loginAt: moment().toString()
        
    }, null, 2)); 
    res.write('</pre>');
    res.end();
};


const page404 = res => {
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/html'); 
    res.write('<pre>');
    res.write(JSON.stringify({
        status: 'Failed',
        message: 'Not Found',
        study: 'Node JS',
    }, null, 2)); 
    res.write('</pre>');
    res.end();
};


const welcome = res => {
    res.end('<h1>Welcome Lorem</h1>');
};

server.listen(3000, () => console.log('Click to this http://127.0.0.1:3000'));
