let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.set('view engine','ejs')

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => { 
    res.render('index');
});

app.get('/about', (req, res) => { 
    res.render('about');
});

app.get('/product', (req, res) => { 
    res.render('product');
});  

app.get('/more-product', (req, res) => { 
    res.render('more-product');
});

app.get('/product-1', (req, res) => { 
    res.render('product-1');
});

app.get('/contact', (req, res) => { 
    res.render('contact');
});
 
app.listen(port, () => {
    console.log(`Server is running on prot ${port}`);
});
