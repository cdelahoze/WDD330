const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api', validateToken, (req, res) => {
    res.json({
        tuits:[
        {
            id:0,
            text: 'this is my first tuit',
            username: 'cdelahoze'
        },
        {
            id:0,
            text: 'the best lenguaje is HTML!',
            username: 'happy'
        }
      ]
    })

});


app.get('/login', (req, res) => {
    res.send (`<html>
        <head>
            <title>Login</title>
        </head>
        <body>
            <form method = "POST" action = "/auth">
                username: <input type = "text" name = "text"></input>
                password: <input type = "password" name = "password"> </input>
                <input type = "submit" value = "log in"/>
            </form>
        </body>
    </html>`)
});

app.post('/auth', (req, res) => {
    const {username, password} = req.body;
    //consultar la base de datos y validar que existen
    //tanto username como password
    const user = {username: username};
    const accessToken = generateAccessToken(user);
    res.header('authorization', accessToken).json({
        message: 'authenticated user',
        token: accessToken
    })
});

function generateAccessToken(user){
    return jwt.sign(user, process.env.SECRET, {expiresIn: '5m'});
}

//Validate of token

function validateToken(req, res, next){
    const accessToken =req.headers['autorization'];
    if(!accessToken) res.send('Access denied');

    jwt.verify(accessToken, process.env.SECRET, (err, user) =>{
        if(err){
            res.send('Acces denided, token expired or incorrect');
        }
        else{
            next();
        }
    });

}


app.listen(3000, () => {
    console.log('servidor iniciado...');
});