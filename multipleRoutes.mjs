import { createServer } from 'http'

const port = 3000;

const myServer = createServer((req, res)=>{
    const url = req.url
    const method = res.method

    if(url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('This is the Home Page')
    }


})

myServer.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})