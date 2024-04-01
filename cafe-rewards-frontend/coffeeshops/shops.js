function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Fetch shop data from your backend API
    fetch('http://localhost:3000/api/coffeeshops')
        .then(response => response.json())
        .then(shopsData => {
            // Assuming shopsData is an array of shop objects
            shopsData.forEach(shop => {
                // Use the location to split the string into latitude and longitude
                const [lat, lng] = shop.location.split(', '); // Make sure this matches how your location data is formatted

                // Create a marker for each shop
                createMarker(map, { lat: parseFloat(lat), lng: parseFloat(lng) });

                // Add shop to the list
                const shopList = document.querySelector('.shop-list');
                const shopDiv = document.createElement('div');
                shopDiv.classList.add('shop-item');
                shopDiv.innerHTML = `
                    <h3>${shop.name}</h3>
                    <p>${shop.location}</p>
                    <p>${shop.description}</p>
                    <button class="order-button">Order Here</button>
                `;
                shopList.appendChild(shopDiv);

                // Add event listener for the 'Order Here' button
                shopDiv.querySelector('.order-button').addEventListener('click', () => orderHere(shop.shopid));
            });
        })
        .catch(error => console.error('Error fetching shops:', error));
}

function orderHere(shopId) {
    console.log('Ordering from shop ID:', shopId);
    // Implementation for ordering from a specific shop
}

// ... rest of your existing functions
