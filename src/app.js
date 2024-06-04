import router from './router.js';
import './Styles/main.css';
import './Styles/homePage.css';
import './Styles/checkoutPage.css';
import './Styles/cardProduct.css';

const App = () => {
  router();
  return document.createElement('div');
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  root.appendChild(App());
});