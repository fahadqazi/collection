const Chance = require('chance')
const chance = new Chance()
const http = require('http')


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    while(chance.bool({likelihood: 95})){
        res.write(chance.string() + '\n')
    }
    res.end('\nThe end... \n')
    res.on('finish', ()=> console.log('all data was sent'))
}).listen(8000, () => console.log('listening on port 8000'))
