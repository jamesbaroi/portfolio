import express from 'express';
import { dbConnection } from '../config/db.config.js';

export const routerMain = express.Router();

// Index
routerMain.get('/', (req, res) => {
  res.render('index');
});


// Redirect
routerMain.all('*', (req, res) => { res.redirect('/'); });