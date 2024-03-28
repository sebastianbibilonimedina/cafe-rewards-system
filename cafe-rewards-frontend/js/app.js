const faker = require('faker');
const express = require('express');
const QRCode = require('qrcode');
const app = express();

app.get('/generate_digital_card/:customerId', async (req, res) => {

    let customerData = {
        points: Math.floor(Math.random() * 1001), // Generate random points between 0 and 1000
        coffeeShopName: faker.company.companyName() // Generate a random company (coffee shop) name
    };

    // Generate QR code
    const qr_image = await QRCode.toDataURL(req.params.customerId);

    // Render the card with fetched data and generated QR code
    const card = `
    <div style="border:1px solid black; padding:10px; margin:10px; width:300px">
      <h2>${customerData.coffeeShopName}</h2>
      <p>Points: ${customerData.points}</p>
      <img src="${qr_image}">
    </div>`;

    res.send(card);
});

app.listen(3000, () => console.log('Server running on port 3000'));