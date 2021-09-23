const router = require('express').Router(); // создали роутер
const fs = require('fs');



router.post('/',(req,res)=>{
      console.log(__dirname +req.body.path);
      if (fs.existsSync(__dirname +req.body.path)) {
        // Do something
        fs.readdir(__dirname +req.body.path, (err, files) => {
            if (err) {
              console.error(err)
              return
            }
            res.send({test: files});
        })
      } 
    });

    router.post('/writeFiletest',(req,res)=>{
      res.setHeader('content-type', 'text/plain');
      fs.writeFile(__dirname+req.body.path, req.body.filevalue, (err) => {
        if (err) console.log(err);
      }); 

    })

    router.post('/viewprogramm',(req,res)=>{
      if (fs.existsSync(__dirname +req.body.path)) { 
        fs.readFile(__dirname +req.body.path, 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }       
            res.setHeader('content-type', 'text/plain');
            res.send({data});
          })
        }
    })
    
module.exports = router; // экспортировали роутер 