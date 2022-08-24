import express from 'express';
import { dbConnection } from '../config/db.config.js';

export const routerMain = express.Router();

// Index
routerMain.get('/', (req, res) => {
  res.render('index');
});

routerMain.get('/cookie-policy', (req, res) => {
  res.render('cke', { layout: 'alt', title: 'Cookie Policy' });
});

routerMain.get('/privacy-policy', (req, res) => {
  res.render('prv', { layout: 'alt', title: 'Privacy Policy' });
});

routerMain.get('/user-agreement', (req, res) => {
  res.render('agr', { layout: 'alt', title: 'User Agreement' });
});

// Redirect
routerMain.all('*', (req, res) => { res.redirect('/'); });