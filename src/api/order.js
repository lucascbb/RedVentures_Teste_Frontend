const postOrder = async (orderData) => {
    try {
        const response = await fetch('https://api.tech.redventures.com.br/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf'
            },
            body: JSON.stringify(orderData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export default postOrder;
