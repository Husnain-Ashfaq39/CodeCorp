for (let i = 0; i < 10000; i++) {
    console.log(`This is message number ${i + 1}`);
}

function generateLargeArray(size) {
    return Array.from({ length: size }, (_, index) => index + 1);
}

const largeArray = generateLargeArray(10000);
console.log(largeArray);



