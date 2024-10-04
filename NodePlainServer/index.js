const http = require('http');

const PORT = 3000;

 const server = http.createServer((req, res) => {
    console.log('requesr resived');
    console.log(res);
    console.log(req);
    // send hello here!
    if (req.url == '/') {
        res.write('home');
    } else if(req.url == '/ping'){
        res.write('pong');
        
    }else{
        res.write("hello here!")  // write the responce for client
    }
   

    res.end(); // for end process
 })
 server.listen(PORT, () => {
  console.log("Server listining on port: http://localhost", PORT);
  
 })