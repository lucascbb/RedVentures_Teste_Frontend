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

  const broths = await getBroths();
  const mainBroths = page.querySelector('#mainBroths');
  broths.map(product => {
    const cardProduct = CardProduct(product);
    mainBroths.appendChild(cardProduct);
  });


  const proteins = await getProteins();
  const mainProteins = page.querySelector('#mainProteins');
  proteins.map(product => {
    const cardProduct = CardProduct(product);
    mainProteins.appendChild(cardProduct);
  });

  return page;
};

export default HomePage;
