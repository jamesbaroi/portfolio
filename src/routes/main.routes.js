import express from 'express';
import { dbConnection } from '../config/db.config.js';

export const routerMain = express.Router();

// Main ----------------------------------------------------------------------/

// Index
routerMain.get('/', (req, res) => {
  const projs = 'SELECT * FROM projects ORDER BY id DESC;';
  dbConnection.query(projs, (error, results) => {
    if (error) throw error;
    res.render('index', { title: 'Home', results: results })
  });
});

// Alt -----------------------------------------------------------------------/

// Cookie policy
routerMain.get('/cookie-policy', (req, res) => {
  res.render('cke', { layout: 'alt', title: 'Cookie Policy' });
});

// Privacy policy
routerMain.get('/privacy-policy', (req, res) => {
  res.render('prv', { layout: 'alt', title: 'Privacy Policy' });
});

// User agreement
routerMain.get('/user-agreement', (req, res) => {
  res.render('agr', { layout: 'alt', title: 'User Agreement' });
});

// Redirect ------------------------------------------------------------------/
routerMain.all('*', (req, res) => { res.redirect('/'); });