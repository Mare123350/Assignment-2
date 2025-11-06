// app.js
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');   // 👈 add

const indexRouter = require('./routes/index');

const app = express();

/* ---------- view engine + layouts ---------- */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);                     // 👈 enable layouts
app.set('layout', 'layouts/main');           // 👈 use views/layouts/main.ejs

/* ---------- middleware ---------- */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* ---------- static assets ---------- */
app.use(express.static(path.join(__dirname, 'public')));

/* ---------- routes ---------- */
app.use('/', indexRouter);

/* ---------- 404 ---------- */
app.use(function(req, res, next) {
  next(createError(404));
});

/* ---------- error handler ---------- */
app.use(function(err, req, res, next) {
  const status = err.status || 500;
  res.status(status).send(
    `<h1>${status} — ${err.message}</h1>` +
    (req.app.get('env') === 'development' && err.stack
      ? `<pre>${err.stack}</pre>` : '')
  );
});

/* ---------- START SERVER ---------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);  
});

module.exports = app;