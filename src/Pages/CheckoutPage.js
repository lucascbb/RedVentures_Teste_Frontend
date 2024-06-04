import ramengoLogoRed from '../Assets/Images/ramengoLogo_red.webp';
import bowingImage from '../Assets/Images/bowing.webp';
import arrowImage from '../Assets/Images/arrow.webp';

const CheckoutPage = async () => {
    const page = document.createElement('div');

    const order = JSON.parse(sessionStorage.getItem('orderResponse'));
    if (!order) {
        window.location.href = '/';
    }

    page.innerHTML = `
    <div id="mainCheckout">
        <header id="ramengoLogo_red">
            <img id="ramengoLogo" src="${ramengoLogoRed}" alt="Ramengo Logo">
        </header>

        <main>
            <section id="sectionProductCheckout">
                <img id="imageOrder" src="${order.image}" alt="Ordered Item">
                <h2 id="titleOrder_text">Your Order:</h2>
                <p id="nameOrder_text">${order.description}</p>
            </section>

            <section id="sectionMessageCheckout">
                <img id="bowingImage" src="${bowingImage}" alt="Bowing Image">
                <p id="asianSubtitile_text">どもありがとうございます。</p>
                <p id="orderPrepared_text">Your order is being prepared</p>
                <p id="holdOn_text">Hold on, when you least expect you will be eating your rámen.</p>

                <button class='placeNewOrderBtn'>
                    <span id="textOrderBtn">PLACE NEW ORDER</span>
                    <img id="arrowImage" src="${arrowImage}" alt="Arrow Image">
                </button>
            </section>
        </main>
    </div>
  `;

    const placeMyOrderButton = page.querySelector('.placeNewOrderBtn');
    placeMyOrderButton.addEventListener('click', () => {
        window.location.href = '/';
    });

    return page;
};

export default CheckoutPage;
