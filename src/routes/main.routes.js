import express from 'express';
import { dbConnection } from '../config/db.config.js';

export const routerMain = express.Router();

// Main ----------------------------------------------------------------------/

// Index
routerMain.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Portfolio
routerMain.get('/portfolio', (req, res) => {
  res.render('portfolio', { title: 'Portfolio' });
});

// About
routerMain.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Blog
routerMain.get('/blog', (req, res) => {
  res.render('blog', { title: 'Blog' });
});

// Join
routerMain.get('/join', (req, res) => {
  res.render('join', { title: 'Join' });
});

// Sign in
routerMain.get('/sign-in', (req, res) => {
  res.render('signin', { title: 'Sign In' });
});

// Settings
routerMain.get('/settings', (req, res) => {
  res.render('settings', { title: 'Settings' });
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