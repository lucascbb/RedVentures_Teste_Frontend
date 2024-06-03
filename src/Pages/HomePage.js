import getBroths from '../api/broths';
import getProteins from '../api/proteins';

import CardProduct from '../Components/CardProducts';

import ramengoLogo from '../Assets/Images/ramengoLogo.webp';
import illustrationImage from '../Assets/Images/illustration.webp';
import asianLettersImage from '../Assets/Images/asianLetters.webp';
import arrowImage from '../Assets/Images/arrow.webp';
import arrowWhiteImage from '../Assets/Images/arrowWhite.webp';


const HomePage = async () => {
  const page = document.createElement('div');

  page.innerHTML = `
    <div>
      <div id="mainBackground">
        <img id="ramengoLogo" src="${ramengoLogo}" alt="SVG Image">

        <div id="main1">
          <div id="main2">
            <div class="mainTitle">
              <img id="asianLettersImage" src="${asianLettersImage}" alt="SVG Image">
              <h1 id="title">GO!</h1>
            </div>

            <p id='subtitle'>
              Enjoy a good ramen in the comfort of your house. Create your own ramen and choose your favorite flavour combination!
            </p>
            
            <button id='orderBtn'>
              <span id='textOrderBtn'>ORDER NOW</span>
              <img id="arrowImage" src="${arrowImage}" alt="SVG Image">
            </button>
          </div>
        </div>
        
        <img id="illustrationImage" src="${illustrationImage}" alt="SVG Image">
      </div>

      <div id="mainOrder">
        <h2 id="subtitleOrder">First things first: select your favorite broth.</h2>
        <p id="paragraphOrder">It will give the whole flavor on your ramen soup.</p>

        <div id="mainBroths" />
      </div>

      <div id="mainOrder">
        <h2 id="subtitleOrder">It’s time to choose (or not) your meat!</h2>
        <p id="paragraphOrder">Some people love, some don’t. We have options for all tastes.</p>

        <div id="mainProteins" />
      </div>

      <button id='orderBtn'>
        <span id='textOrderBtn'>PLACE MY ORDER</span>
        <img id="arrowImage" src="${arrowWhiteImage}" alt="SVG Image">
      </button>

    </div>
  `;

  const cardsBroths = [];
  let broth;

  const cardsProteins = [];
  let protein;

  const broths = await getBroths();
  const mainBroths = page.querySelector('#mainBroths');
  broths?.map(product => {
    const cardProduct = CardProduct(product);
    cardProduct.addEventListener('click', () => handleCardClick(cardProduct, cardsBroths, 'broth'));
    cardProduct.id = product.id;
    cardsBroths.push(cardProduct);
    mainBroths.appendChild(cardProduct);
  });

  const proteins = await getProteins();
  const mainProteins = page.querySelector('#mainProteins');
  proteins?.map(product => {
    const cardProduct = CardProduct(product);
    cardProduct.addEventListener('click', () => handleCardClick(cardProduct, cardsProteins, 'protein'));
    cardProduct.id = product.id;
    cardsProteins.push(cardProduct);
    mainProteins.appendChild(cardProduct);
  });


  const handleCardClick = (card, cards, type) => {
    let arrayProduct;

    if (type === "broth") {
      arrayProduct = broths.find(broth => broth.id === card.id);
      broth = arrayProduct;
    } else {
      arrayProduct = proteins.find(protein => protein.id === card.id);
      protein = arrayProduct;
    }

    const imageProduct = card.querySelector('img');
    const nameProduct = card.children[1].classList;
    const descriptionProduct = card.children[2].classList;
    const priceProduct = card.children[3].classList;

    if (card.className === "cardProduct") {
      cards.forEach(element => {
        element.classList.remove('cardProduct_selected');
        element.classList.add('cardProduct');

        const child = element.children;

        child[1].classList.remove('nameProduct_selected');
        child[1].classList.add('nameProduct');
        child[2].classList.remove('descriptionProduct_selected');
        child[2].classList.add('descriptionProduct');
        child[3].classList.remove('priceProduct_selected');
        child[3].classList.add('priceProduct');


        if (type === "broth") {
          const brothImages = broths.find(broth => broth.id === element.id);
          element.querySelector('img').src = brothImages.imageInactive
        } else if (type === "protein") {
          const proteinImages = proteins.find(protein => protein.id === element.id);
          element.querySelector('img').src = proteinImages.imageInactive
        }
      });

      imageProduct.src = arrayProduct.imageActive

      card.classList.remove('cardProduct');
      card.classList.add('cardProduct_selected');

      nameProduct.remove('nameProduct');
      nameProduct.add('nameProduct_selected');

      descriptionProduct.remove('descriptionProduct');
      descriptionProduct.add('descriptionProduct_selected');

      priceProduct.remove('priceProduct');
      priceProduct.add('priceProduct_selected');
      
    } else if (card.className === "cardProduct_selected") {
      imageProduct.src = arrayProduct.imageInactive

      card.classList.remove('cardProduct_selected');
      card.classList.add('cardProduct');

      nameProduct.remove('nameProduct_selected');
      nameProduct.add('nameProduct');

      descriptionProduct.remove('descriptionProduct_selected');
      descriptionProduct.add('descriptionProduct');

      priceProduct.remove('priceProduct_selected');
      priceProduct.add('priceProduct');
    }
  };

  return page;
};

export default HomePage;
