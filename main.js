for (let i = 0; i < 10000000; i++) {
    if (i % 1000 === 0) {
        console.log(`This is message number ${i + 1}`);
    }
}

function generateLargeArray(size) {
    return Array.from({ length: size }, (_, index) => index + 1);
}

const largeArray = generateLargeArray(10000);
console.log(largeArray.join(', ')); // Displaying the array as a comma-separated string for better readability
