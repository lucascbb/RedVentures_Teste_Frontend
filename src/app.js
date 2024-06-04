import router from './router.js';

const App = () => {
  router();
  return document.createElement('div');
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  root.appendChild(App());
});