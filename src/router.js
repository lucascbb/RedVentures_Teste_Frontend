import HomePage from './Pages/HomePage';
import CheckoutPage from './Pages/CheckoutPage';

const routes = {
  '/': HomePage,
  '/checkout': CheckoutPage,
};

const router = async () => {
  const root = document.getElementById('app');
  const path = window.location.pathname;
  const renderPage = routes[path];

  root.innerHTML = '';

  if (renderPage) {
    const page = await renderPage();
    root.appendChild(page);
  } else {
    console.error('No route found for path:', path);
  }
};

export default router;
