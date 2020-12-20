var express = require('express');
var app = express();
var bodyParser = require('body-parser');
let mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://Admin:Admin123@mydb.2ulxr.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

console.log("mongodb connect...");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/martsinkiv-lab4'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) { res.sendFile(__dirname + '/dist/martsinkiv-lab4/index.html'); });

app.listen(process.env.PORT || 4300);
console.log('server is run!');

let schemaChatUser = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    price: {
        type: Number,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    }
});

let Product = mongoose.model("Products", schemaChatUser);

app.get('/getproducts', function(req, res) {
    Product.find(function(err, data) {
        // console.log("h", data);
        res.send(data);
    })
});

app.post('/addproduct', function(req, res) {
    // console.log(req.body);
    var prod = new Product(req.body);
    prod.save(function(err, data) {
        if (err) console.log(err.message);
        res.send('add user!');
    })
});

app.post('/removeproduct', function(req, res) {
    Product.remove({ _id: req.body.id }, function(err, data) {
        res.send('remove user');
    })
});

app.post('/updateproduct', function(req, res) {
    Product.update({ _id: req.body._id }, {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        },
        function(err, data) {
            console.log(req.body._id);
            res.send('update user');
        })
})

app.post('/findproduct', function(req, res) {
    // console.log("req.body", req.body);
    Product.find({ _id: req.body.id }, function(err, data) {
        console.log("data", data);
        res.send(data);
    })
})

let schemaUser = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        unique: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    login: {
        type: String,
        required: false,
        unique: true
    },
    password: {
        type: String,
        required: false,
        unique: false
    },
    tel: {
        type: String,
        required: false,
        unique: true
    }
});

let User = mongoose.model("logUser", schemaUser);

app.get('/getuser', function(req, res) {
    User.find(function(err, data) {
        // console.log("h", data);
        res.send(data);
    })
});

app.post('/adduser', function(req, res) {
    // console.log(req.body);
    var prod = new User(req.body);
    prod.save(function(err, data) {
        if (err) console.log(err.message);
        res.send(data);
    })
});

app.post('/finduser', function(req, res) {
    console.log(req.body);
    // console.log(req.body.password);
    User.find({
            login: req.body.login,
            password: req.body.password
        },
        function(err, data) {
            console.log(data[0]);
            if (data.length) {
                res.send(data[0]);
            } else {
                res.send("'Incorrect login or password'");
            }
        })
})