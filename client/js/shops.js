import { fetchData } from './utils/fetch/fetchUtils.js';
import { createDivElementWithClass, createElementWithText, appendElementsToParent } from './utils/elements/elementsUtils.js';
import { ENDPOINTS } from './utils/apiConfig.js';

async function fetchShops() {
    try {
        const data = await fetchData(ENDPOINTS.coffeeshops);
        return data;
    } catch (error) {
        console.error('Error fetching shops:', error);
    }
}

function createShopElement(shop) {
    const shopDiv = createDivElementWithClass('shop-item');

    const title = createElementWithText('h3', shop.name);
    const location = createElementWithText('p', `Location: ${shop.location}`);
    const description = createElementWithText('p', shop.description);
    const button = createElementWithText('button', 'Order Here', 'order-button');

    appendElementsToParent(shopDiv, title, location, description, button);

    return shopDiv;
}

function displayShops(shopsData) {
    const shopListContainer = document.querySelector('.shop-items-container');
    shopListContainer.innerHTML = '';

    if (shopsData && shopsData.length > 0) {
        shopsData.forEach(shop => {
            const shopElement = createShopElement(shop);
            shopListContainer.appendChild(shopElement);
        });
    } else {
        shopListContainer.textContent = 'No shops found.';
    }
}

async function initializeApplication() {
    const shopsData = await fetchShops();
    displayShops(shopsData);
}

// Call initializeApplication when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApplication);
