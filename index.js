//1- stap http module   

const http = require('http')

//2-stap  file read import process
const fs = require('fs')

//3-stap  path import process
const path = require('path')

//server create

const app = http.createServer((req,res) => {

    console.log(req.url)
     if(req.url === '/'){

         //index.html connected

        fs.readFile(path.join(__dirname,'public','index.html'),(err,content) => {
            if(err){
                throw err
            }
            res.end(content)
        })

    }else if(req.url === '/about'){

        //about.html connecter

        fs.readFile(path.join(__dirname,'public','about.html'),(err,content) => {
            if(err){
                throw err
            }
            res.end(content)
        })
    }

    
}) 

const PORT = process.env.PORT || 3000 

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})

//server connected 