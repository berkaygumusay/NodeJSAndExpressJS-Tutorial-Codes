const express = require('express');
const app = express();
const {products, people} = require("./data");

app.get('/',(req,res) => {
    res.send('<h1>HomePage!</h1> <a href="/api/products"> Go to api </a>');
})
app.get('/api/products',(req,res) => {
    
    const newProducts = products.map((product) => {
      const {id,name,price} = product;
      return {id,name,price}
    })

    res.json(newProducts);
})
app.get('/api/v1/query',(req,res) => {
    const { search,limit } = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit)); 
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({ success: true, data: []});
    }
    res.status(200).json(sortedProducts);
    res.send("Hello World !")

})
app.get('/api/products/:productID',(req,res) => {
    
/*  console.log(req);
    console.log(req.params); */
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
//    console.log(singleProduct.id);
    res.json(singleProduct);
})



app.listen(5000,() => {
    console.log("this server listening on port 5000");
})