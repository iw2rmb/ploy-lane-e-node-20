const http=require('http');const port=process.env.PORT||8080;http.createServer((req,res)=>{if(req.url==='/healthz'){res.statusCode=200;return res.end('ok');}res.end('hello');}).listen(port);
