const express = require('express');
const app = express();

const {products} = require('./data');

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })

    res.json(newProducts);
})

// Access one by one
app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => product.id === 1);
    res.json(singleProduct);
})

// Route parameters
app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID));

    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist');
    }
    return res.json(singleProduct);
})


app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})