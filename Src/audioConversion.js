const ffmpeg = require('fluent-ffmpeg');

// Function to convert audio file to MP3 format
function convertToMP3(inputPath, outputPath) {
    ffmpeg(inputPath)
        .toFormat('mp3')
        .on('end', () => {
            console.log('Audio conversion completed.');
        })
        .on('error', (error) => {
            console.error('Error converting audio:', error);
        })
        .save(outputPath);
}

// Example usage:
convertToMP3('input.wav', 'output.mp3');
