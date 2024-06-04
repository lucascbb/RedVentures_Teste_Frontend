import App from './app.js';
import router from './router.js';

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById('app');
  const app = await App();
  root.appendChild(app);

  router();
});
