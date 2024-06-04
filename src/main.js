import App from './app.js';
import router from './router.js';
import './Styles/main.css';
import './Styles/homePage.css';
import './Styles/checkoutPage.css';
import './Styles/cardProduct.css';

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById('app');
  const app = await App();
  root.appendChild(app);

  router();
});
