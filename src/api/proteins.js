const getProteins = async () => {
    try {
        const response = await fetch('https://api.tech.redventures.com.br/proteins', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': import.meta.env.VITE_APIKEY
            }
        });

        if (!response.ok) {
            throw new Error('API response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export default getProteins;
