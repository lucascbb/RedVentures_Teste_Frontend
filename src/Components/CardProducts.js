const CardProduct = (props) => {
    const { name, description, imageInactive, price } = props;

    const card = document.createElement('article');
    card.classList.add('cardProduct');

    card.innerHTML = `
        <figure>
            <img id="imageProduct" src="${imageInactive}" alt="${name}">
        </figure>
        <section>
            <h2 class="nameProduct">${name}</h2>
            <p class="descriptionProduct">${description}</p>
            <p class="priceProduct">US$ ${price}</p>
        </section>
    `;

    return card;
};

export default CardProduct;
