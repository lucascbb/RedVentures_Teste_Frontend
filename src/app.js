import router from './router.js';
import '../src/styles/cardProduct.css';

const App = () => {
  router();
  return document.createElement('div');
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  root.appendChild(App());
});