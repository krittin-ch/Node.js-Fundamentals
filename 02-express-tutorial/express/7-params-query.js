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

// Parameters with extra infos
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(res.params);
    res.send('Hello World');
})

app.get('/api/v1/query', (req, res) => {
  console.log(req.query); 

//   http://localhost:5000/api/v1/query?name=albany%20sofa&id=1
//   { name: 'albany sofa', id: '1 

//   http://localhost:5000/api/v1/query?search=1&limit=2
//   { search: '1', limit: '2' }

    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        // filter name by search
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    // http://localhost:5000/api/v1/query?search=albany%20sofa

    // [
    //     {
    //       "id": 1,
    //       "name": "albany sofa",
    //       "image": "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
    //       "price": 39.95,
    //       "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
    //     }
    // ]

    if (limit) {
        // limit the id to the limit
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('No Products Matched Your Search')
        return res.status(200).json({success: true, data: []})
    }
    return res.status(200).json(sortedProducts)
})


app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})