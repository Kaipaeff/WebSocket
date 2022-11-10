require('dotenv').config();
const express = require('express');
const morgan = require('morgan')

const ws = require('ws');

const path = require('path');

const session = require('express-session');

const FileStore = require('session-file-store')(session);

// require('@babel/register');

const dbConnectionCheck = require('../db/dbConnectCheck');

const { PORT, SESSION_SECRET } = process.env || 8000

const app = express();
dbConnectionCheck();

const indexRoutes = require('./routes/indexRoutes');
const loginRoutes = require('./routes/loginRoutes');
const regRoutes = require('./routes/regRoutes');
const chatRoutes = require('./routes/chatRoutes');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const sessionConfig = {
  name: 'myCookie',
  store: new FileStore(),
  secret: SESSION_SECRET ?? 'mySecretPassword',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true
  }
}

app.use(session(sessionConfig))

app.use('/', indexRoutes);
app.use('/login', loginRoutes);
app.use('/register', regRoutes);
app.use('/chat', chatRoutes);

app.get('/logout', async (req, res) => {
  try {
    if (req.session.newUser) {
      req.session.destroy(() => {
        res.clearCookie('myCookie');
        res.redirect('/')
      })
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.send(`Error ====>>> ${error}`)
  }
})

const httpServer = app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT} port`);
})

const wsServer = new ws.WebSocketServer({ server: httpServer })

wsServer.on('connection', (client) => {
  client.on('message', (data) => {
    const utfData = JSON.parse(data.toString('utf8'))
    utfData.clientsSize = wsServer.clients.size;
    wsServer.clients.forEach((currentClient) => {
      currentClient.send(JSON.stringify(utfData))
    })
  })
})
