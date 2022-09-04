import express from 'express';
import { dbConnection } from '../config/db.config.js';
import { host, port, url } from '../config/env.config.js';
import { update } from '../app.js';

export const routerMain = express.Router();

// Main ----------------------------------------------------------------------/

// Index
routerMain.get('/', (req, res) => {
  const projs = 'SELECT * FROM projects ORDER BY id DESC;';
  dbConnection.query(projs, (error, results) => {
    if (error) throw error;
    res.render('index', { title: 'Home', results: results, url: url });
  });
});

// Alt -----------------------------------------------------------------------/

// Cookie policy
routerMain.get('/cookie-policy', (req, res) => {
  res.render('cke', {
    layout: 'alt',
    title: 'Cookie Policy',
    host: host,
    port: port,
    url: url,
    update: update
  });
});

// Privacy policy
routerMain.get('/privacy-policy', (req, res) => {
  res.render('prv', {
    layout: 'alt',
    title: 'Privacy Policy',
    host: host,
    port: port,
    url: url,
    update: update
  });
});

// User agreement
routerMain.get('/user-agreement', (req, res) => {
  res.render('agr', {
    layout: 'alt',
    title: 'User Agreement',
    host: host,
    port: port,
    url: url,
    update: update
  });
});

// Redirect ------------------------------------------------------------------/
routerMain.all('*', (req, res) => { res.redirect('/'); });