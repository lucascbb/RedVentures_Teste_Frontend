const CardProduct = (props) => {
    const { name, description, imageActive, imageInactive, price } = props;

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div id="cardProduct">
            <img id="imageProduct" src="${imageInactive}" alt="${name}">
            <h2 id="nameProduct" >${name}</h2>
            <p id="descriptionProduct">${description}</p>
            <p id="priceProduct">US$ ${price}</p>
        </div>
    `;

    return card;
};

export default CardProduct;
