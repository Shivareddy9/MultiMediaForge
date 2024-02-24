// Importing modules
const imageEditing = require('./imageEditing');
const audioConversion = require('./audioConversion');

// Example usage of image editing module
imageEditing.resizeImage('input.jpg', 'output.jpg', 300, 200);

// Example usage of audio conversion module
audioConversion.convertToMP3('input.wav', 'output.mp3');
