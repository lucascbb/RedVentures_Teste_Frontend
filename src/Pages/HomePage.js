import getBroths from '../api/broths';
import getProteins from '../api/proteins';
import postOrder from "../api/order"

import CardProduct from '../Components/CardProducts';

import ramengoLogo from '../Assets/Images/ramengoLogo.webp';
import illustrationImage from '../Assets/Images/illustration.webp';
import asianLettersImage from '../Assets/Images/asianLetters.webp';
import arrowGoldImage from '../Assets/Images/arrow.webp';
import arrowWhiteImage from '../Assets/Images/arrowWhite.webp';


const HomePage = async () => {
  const page = document.createElement('div');
  sessionStorage.clear('orderResponse');

  page.innerHTML = `
    <div>
      <header id="mainBackground">
        <figure id="mainLogo">
          <img id="ramengoLogo" src="${ramengoLogo}" alt="Ramengo Logo">
        </figure>

        <section id="container">
          <article id="main">
            <div class="mainTitle">
              <img id="asianLettersImage" src="${asianLettersImage}" alt="Asian Letters">
              <h1 id="title">GO!</h1>
            </div>

            <p id='subtitle'>
              Enjoy a good ramen in the comfort of your house. Create your own ramen and choose your favorite flavour combination!
            </p>
                    
            <button class='orderBtn'>
              <span id='textOrderBtn'>ORDER NOW</span>
              <img id="arrowImage" src="${arrowGoldImage}" alt="Arrow">
            </button>
          </article>
        </section>
            
        <img id="illustrationImage" src="${illustrationImage}" alt="Illustration">
        <h1 id="subtitleAsianMobile">ラーメン</h1>
        <h2 id="titleMobile">GO!</h2>
        <p id='subtitleMobile'>
          Enjoy a good ramen in the comfort of your house. Create your own ramen and choose your favorite flavour combination!
        </p>
      </header>

      <section id="mainOrder1">
        <h2 id="subtitleOrder">First things first: select your favorite broth.</h2>
        <p id="paragraphOrder">It will give the whole flavor on your ramen soup.</p>

        <div id="mainBroths"></div>
      </section>

      <div id="radios1">
        <input type="radio" id="broth1" checked=true class="radio_broth" name="broth">
        <input type="radio" id="broth2" class="radio_broth" name="broth">
        <input type="radio" id="broth3" class="radio_broth" name="broth">
      </div>

      <section id="mainOrder2">
        <h2 id="subtitleOrder">It’s time to choose (or not) your meat!</h2>
        <p id="paragraphOrder">Some people love, some don’t. We have options for all tastes.</p>

        <div id="mainProteins"></div>
      </section>

      <div id="radios2">
        <input type="radio" id="protein1" checked=true class="radio_protein" name="protein">
        <input type="radio" id="protein2" class="radio_protein" name="protein">
        <input type="radio" id="protein3" class="radio_protein" name="protein">
      </div>

      <footer id="mainPlaceOrdrBtn">
        <button class='placeOrderBtn'>
          <span id='textOrderBtn'>PLACE MY ORDER</span>
          <img id="arrowImage" src="${arrowWhiteImage}" alt="Arrow">
        </button>
      </footer>
    </div>
`;

  const orderButton = page.querySelector('.orderBtn');
  orderButton.addEventListener('click', () => {
    window.scrollBy({
      top: 768,
      behavior: 'smooth'
    });
  });

  const cardsBroths = [];
  let broth = null;

  const cardsProteins = [];
  let protein = null;;

  const broths = await getBroths();
  const mainBroths = page.querySelector('#mainBroths');
  broths?.map(product => {
    const cardProductBroth = CardProduct(product);

    cardProductBroth.addEventListener('click', () => handleCardClick(cardProductBroth, cardsBroths, 'broth'));
    cardProductBroth.id = product.id;
    cardsBroths.push(cardProductBroth);
    mainBroths.appendChild(cardProductBroth);
  });

  const proteins = await getProteins();
  const mainProteins = page.querySelector('#mainProteins');

  proteins?.map(product => {
    const cardProductProtein = CardProduct(product);

    cardProductProtein.addEventListener('click', () => handleCardClick(cardProductProtein, cardsProteins, 'protein'));
    cardProductProtein.id = product.id;
    cardsProteins.push(cardProductProtein);
    mainProteins.appendChild(cardProductProtein);
  });

  const handleCardClick = (card, cards, type) => {
    const findProduct = (type, id) => {
      return type === "broth" ? broths.find(broth => broth.id === id) : proteins.find(protein => protein.id === id);
    };

    const updateCardClasses = (element, isActive) => {
      const action = isActive ? 'add' : 'remove';
      const inverseAction = isActive ? 'remove' : 'add';

      element.classList[inverseAction]('cardProduct');
      element.classList[action]('cardProduct_selected');

      const child = element.children[1].children;

      child[0].classList[inverseAction]('nameProduct');
      child[0].classList[action]('nameProduct_selected');

      child[1].classList[inverseAction]('descriptionProduct');
      child[1].classList[action]('descriptionProduct_selected');

      child[2].classList[inverseAction]('priceProduct');
      child[2].classList[action]('priceProduct_selected');
    };

    const updateCardImage = (element, type) => {
      const product = findProduct(type, element.id);
      element.querySelector('img').src = product.imageInactive;
    };

    const toggleOrderButton = (isEnabled) => {

      const placeMyOrderButton = page.querySelector('.placeOrderBtn') || page.querySelector('.placeOrderBtn_activated');

      placeMyOrderButton.classList.toggle('placeOrderBtn', !isEnabled);
      placeMyOrderButton.classList.toggle('placeOrderBtn_activated', isEnabled);
      placeMyOrderButton.querySelector('img').src = isEnabled ? arrowGoldImage : arrowWhiteImage;
    };

    const arrayProduct = findProduct(type, card.id);
    type === "broth" ? broth = arrayProduct : protein = arrayProduct;

    if (card.classList.contains('cardProduct')) {
      cards.forEach(element => {
        updateCardClasses(element, false);
        updateCardImage(element, type);
      });

      card.querySelector('img').src = arrayProduct.imageActive;
      updateCardClasses(card, true);
    } else {
      type === "broth" ? broth = false : protein = false;

      card.querySelector('img').src = arrayProduct.imageInactive;
      updateCardClasses(card, false);
    }

    toggleOrderButton(protein && broth);
  };

  const placeMyOrderButton = page.querySelector('.placeOrderBtn');
  placeMyOrderButton.addEventListener('click', async () => {
    if (protein && broth) {
      const orderData = {
        brothId: broth.id,
        proteinId: protein.id,
      };

      const response = await postOrder(orderData);
      sessionStorage.setItem('orderResponse', JSON.stringify(response));

      window.location.href = '/checkout';
    }

  });

  const handleScrollWitdh = (inputRadios, scrollContainer) => {
    inputRadios.forEach((input, index) => {
      input.addEventListener('click', () => {
        const scrollAmount = index * 288;
        scrollContainer.scrollLeft = scrollAmount
      });
    });
  }

  const inputRadiosBroth = page.querySelectorAll('.radio_broth');
  handleScrollWitdh(inputRadiosBroth, mainBroths);

  const inputRadiosProtein = page.querySelectorAll('.radio_protein');
  handleScrollWitdh(inputRadiosProtein, mainProteins);

  const markRadioBasedOnScroll = (scrollContainer, inputRadios) => {
    const scrollPosition = scrollContainer.scrollLeft;

    if (scrollPosition < 216) {
      inputRadios[0].checked = true;
    } else if (scrollPosition < 432) {
      inputRadios[1].checked = true;
    } else {
      inputRadios[2].checked = true;
    }
    ;
  };

  mainBroths.addEventListener('scroll', () => {
    markRadioBasedOnScroll(mainBroths, inputRadiosBroth);
  });

  mainProteins.addEventListener('scroll', () => {
    markRadioBasedOnScroll(mainProteins, inputRadiosProtein);
  });

  return page;
};

export default HomePage;
