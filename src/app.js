// let express = require('express');
// let app = express();
// let path = require('path');
// -------------------------------------------------------------------------- //
// ROUTES
// REQUIRE ROUTE
// let requiredRouter = ('path to router odule')
// USE ROUTES
// app.use('/route',requiredRouter);
// -------------------------------------------------------------------------- //
// GLOBAL MIDDLEWARES
// app.use('requiredMiddleware'); //ex: logs
// -------------------------------------------------------------------------- //
// SET PUBLIC
// app.use(express.static('public'))
// -------------------------------------------------------------------------- //
// EJS TEMPLATE ENJINE
// npm i ejs
// app.set('view engine', 'ejs')
// app.set('views', viewsPath)
// -------------------------------------------------------------------------- //
// ERROR
// app.use((req,res,next) => {
//  res.status(404).render('not-found-view.ejs', { status: 404 } );
//  next();
// })
// -------------------------------------------------------------------------- //
// PUT & DELETE w/ METHOD OVERRIDE
// npm i method-override
// let methodOverride = require('method-override');
// app.use(methodOverride('_method'));
// IN THE VIEW
// <form action="/route?_method=PUT/DELETE" method="POST"></form>
// -------------------------------------------------------------------------- //
// POST
// to parse the body
// app.use(express.urlencoded ({extended:false}));
// app.use(express.json());
// -------------------------------------------------------------------------- //
// SESSION
// npm i express-session
// let session = require('express-session')
// GLOBAL MIDDLEWARE:
// app.use(session({ 
//      secret: 'session-secret',
//      resave: false,
//      saveUninitialized: true
// }));
// -------------------------------------------------------------------------- //
// EXPRESS VALIDATOR
// npm i express-validator
// -------------------------------------------------------------------------- //
// COOKIE
// npm i cookie-parser
// let cookies = require('cookie-parser');
// GLOBAL MIDDLEWARE:
// app.use(cokies());
// -------------------------------------------------------------------------- //
// SERVER LISTENING
// app.listen(3001)