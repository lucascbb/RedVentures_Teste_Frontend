import App from './app.js';
import router from './router.js';
import './styles/main.css';
import './styles/homePage.css';
import './styles/checkoutPage.css';
import './styles/cardProduct.css';

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById('app');
  const app = await App();
  root.appendChild(app);

  router();
});
