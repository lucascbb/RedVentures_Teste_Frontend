const CardProduct = (props) => {
    const { name, description, imageInactive, price } = props;

    const card = document.createElement('div');
    card.classList.add('cardProduct');

    card.innerHTML = `
        <img id="imageProduct" src="${imageInactive}" alt="${name}">
        <h2 class="nameProduct" >${name}</h2>
        <p class="descriptionProduct">${description}</p>
        <p class="priceProduct">US$ ${price}</p>
    `;

    return card;
};

export default CardProduct;
