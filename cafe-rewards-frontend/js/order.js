document.addEventListener('DOMContentLoaded', function() {
    // Fetch and populate coffee shop selection
    fetch('/api/coffee-shops')
        .then(response => response.json())
        .then(coffeeShops => {
            const selectElement = document.getElementById('coffeeShopSelect');
            coffeeShops.forEach(shop => {
                const option = document.createElement('option');
                option.value = shop.id;
                option.textContent = shop.name;
                selectElement.appendChild(option);
            });
        });

    // Add an event listener for when a coffee shop is selected
    const selectElement = document.getElementById('coffeeShopSelect');
    selectElement.addEventListener('change', (event) => {
        const shopId = event.target.value;
        fetchMenuForShop(shopId);
    });

    // Function to fetch and display the menu for a selected coffee shop
    function fetchMenuForShop(shopId) {
        fetch(`/api/menu/${shopId}`)
            .then(response => response.json())
            .then(menuItems => {
                const menuContainer = document.getElementById('menuItems');
                menuContainer.innerHTML = ''; // Clear existing items
                menuItems.forEach(item => {
                    // Create and append menu items
                    const menuItemElement = document.createElement('div');
                    menuItemElement.className = 'menu-item';
                    // Add content to menuItemElement
                    menuContainer.appendChild(menuItemElement);
                });
            });
    }
});
