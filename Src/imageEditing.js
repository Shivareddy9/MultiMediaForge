const Jimp = require('jimp');

// Function to resize an image
async function resizeImage(inputPath, outputPath, width, height) {
    try {
        const image = await Jimp.read(inputPath);
        await image.resize(width, height).write(outputPath);
        console.log('Image resized successfully.');
    } catch (error) {
        console.error('Error resizing image:', error);
    }
}

// Example usage:
resizeImage('input.jpg', 'output.jpg', 300, 200);
