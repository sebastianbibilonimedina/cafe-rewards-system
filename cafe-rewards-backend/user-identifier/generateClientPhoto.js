const fs = require('fs');
const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');

// Assuming the QR code and the font file are located in the same directory as this script
const QR_CODE_IMAGE_PATH = path.join(__dirname, 'qr-code.png');
const FONT_FILE_PATH = path.join(__dirname, 'YourFont.ttf'); // Replace 'YourFont.ttf' with the path to your actual font file

// This function pretends to generate a unique identifier
function generateIdentifier() {
    return Math.random().toString().slice(2, 8);
}

// This function is a placeholder that returns the path to a QR code image
async function generateQRCode() {
    return QR_CODE_IMAGE_PATH;
}

async function generateCafeRewardsCard(clientName, outputDirectory) {
    try {
        // Load the QR code and background images
        const qrCodeImage = await loadImage(await generateQRCode());
        const background = await loadImage(path.join(__dirname, 'applewallet.png'));

        const canvas = createCanvas(background.width, background.height);
        const ctx = canvas.getContext('2d');

        // Draw the background image
        ctx.drawImage(background, 0, 0);

        // Define the typography for the client's name and identifier
        ctx.fillStyle = '#000000'; // This should be a color that is visible on your background
        ctx.font = 'bold 20px CustomFont'; // Use 20px and the custom font you've registered

        // Set the alignment and draw the client's name and identifier on the card
        ctx.textAlign = 'center';
        ctx.fillText(clientName, background.width / 2, 100); // Adjust Y position as needed

        const identifier = generateIdentifier();
        ctx.fillText(identifier, background.width / 2, 150); // Adjust Y position as needed

        // Draw the QR code image
        ctx.drawImage(qrCodeImage, background.width / 2 - qrCodeImage.width / 2, 200); // Adjust position as needed

        // Save the card image
        const outputPath = path.join(outputDirectory, 'cafe-rewards-card.png');
        const out = fs.createWriteStream(outputPath);
        const stream = canvas.createPNGStream();
        stream.pipe(out);

        out.on('finish', () => console.log('Café rewards card generated successfully.'));

        return outputPath;
    } catch (error) {
        console.error('Error generating café rewards card:', error);
        return null;
    }
}

// Generate the card and log the output path
generateCafeRewardsCard('John Doe', __dirname)
    .then(outputPath => console.log(`Card saved to: ${outputPath}`))
    .catch(console.error);
