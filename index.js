const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/product')

app.use(express.json())

let url = 'mongodb://localhost:27017/psldb'
mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
    app.listen(3000,()=>{
        console.log('server up')
    })
    console.log('connected to db')
})



app.get('/',(req,res)=>{
    res.send('<h1>Mongoos Demo.....</h1>')
})

app.get('/products',(req,res)=>{
    Product.find().then((prs)=>{
        res.json(prs)
        console.log('products')
    })
})


app.get('/products/:code',(req,res)=>{
    let code = req.params.code;
    Product.find({code:code}).then((prs)=>{
        res.json(prs)
        console.log(prs)
   })
})

app.delete('/products/:code',(req,res)=>{
    let code = req.params.code;
    Product.deleteOne({code:code}).then((prs)=>{
        res.json(prs)
   })
})

app.post('/products',(req,res)=>{
    let code = req.body.code;
    let name = req.body.name;
    let price = req.body.price;
    let prod = new Product({code:code, name:name, price:price})
    prod.save().then((data)=>{
        res.json(data)
        console.log("post")
    })
})

app.put('/products/:code',(req,res)=>{
    let code = req.body.code;
    let name = req.body.name;
    let price = req.body.price;
    Product.updateOne({code:code, name:name, price:price}).then((data)=>{
        res.json(data)
    })
  
        console.log("put")
    })
