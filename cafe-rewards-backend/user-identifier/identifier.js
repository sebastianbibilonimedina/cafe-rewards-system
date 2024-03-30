const fs = require('fs');
const { randomUUID } = require('crypto'); // Importing secure random UUID generator

// Function to generate a unique identifier
function generateUniqueIdentifier() {
    const identifier = randomUUID().substr(0, 6); // Generating a random UUID and taking first 6 characters

    return identifier;
}

// Function to save the generated identifier to a file
function saveIdentifier(identifier) {
    fs.appendFile('identifiers.txt', `${identifier}\n`, (err) => {
        if (err) {
            console.error('Error saving identifier:', err);
        } else {
            console.log('Identifier saved successfully.');
        }
    });
}

module.exports = {
    generateUniqueIdentifier,
    saveIdentifier
};
