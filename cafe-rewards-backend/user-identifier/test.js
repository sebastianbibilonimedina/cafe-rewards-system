const { generateClientPhoto } = require('./generateClientPhoto');

const clientName = 'John Doe';
const outputDirectory = '../user-identifier'; // Specify the directory here

generateClientPhoto(clientName, outputDirectory);
