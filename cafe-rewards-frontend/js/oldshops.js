const API_URL = 'http://localhost:3000/api/coffeeshops';

async function fetchShops() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Could not fetch shops:', error);
    }
}

function displayShops(shopsData) {
    const shopListContainer = document.querySelector('.shop-items-container');
    shopListContainer.innerHTML = '';
    shopsData.forEach(shop => {
        const shopElement = createShopElement(shop);
        shopListContainer.appendChild(shopElement);
    });
}

function createShopElement(shop) {
    const shopDiv = document.createElement('div');
    shopDiv.className = 'shop-item';

    const title = document.createElement('h3');
    title.textContent = shop.name;
    shopDiv.appendChild(title);

    const location = document.createElement('p');
    location.textContent = shop.location;
    shopDiv.appendChild(location);

    const description = document.createElement('p');
    description.textContent = shop.description;
    shopDiv.appendChild(description);

    const button = document.createElement('button');
    button.className = 'order-button';
    button.textContent = 'Order Here';
    shopDiv.appendChild(button);

    return shopDiv;
}

async function initializeMapWithShopsData() {
    const shopsData = await fetchShops();
    const defaultCenter = { lat: 18.200178, lng: -66.664513 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: defaultCenter,
        zoom: 13,
    });
    for (const shop of shopsData) {
        const marker = new google.maps.Marker({
            position: shop.location,
            map: map,
        });
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const shopsData = await fetchShops();
    displayShops(shopsData);
    await initializeMapWithShopsData();
});
