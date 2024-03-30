const qr = require('qrcode');
const fs = require('fs');

// Function to generate QR code for the given identifier and save it to a file
async function generateQRCode(identifier, directory = 'qrcodes') {
    try {
        // Generate QR code
        const qrCodeData = await qr.toDataURL(identifier);

        // Convert data URL to buffer
        const buffer = Buffer.from(qrCodeData.split(',')[1], 'base64');

        // Save QR code image to file
        const fileName = `${directory}/${identifier}.png`;
        fs.writeFileSync(fileName, buffer);

        console.log('QR code saved successfully:', fileName);
    } catch (error) {
        throw new Error('Error generating QR code:', error);
    }
}

module.exports = generateQRCode; // Export the function
