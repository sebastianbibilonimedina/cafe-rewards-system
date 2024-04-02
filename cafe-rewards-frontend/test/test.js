console.log("Script loaded")
document.addEventListener('DOMContentLoaded', function() {
    const shopListDiv = document.getElementById('coffeeShopsList');
    fetch('http://localhost:3000/api/coffeeshops')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(shopsData => {
            shopsData.forEach(shop => {
                const shopDiv = document.createElement('div');
                shopDiv.classList.add('shop');
                shopDiv.innerHTML = `
                    <h2>${shop.name}</h2>
                    <p>Location: ${shop.location}</p>
                    <p>Description: ${shop.description}</p>
                `;
                shopListDiv.appendChild(shopDiv);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});