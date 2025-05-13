function stringChop(str, size) {

    if (!str) return [];

    // Convert size to a number to avoid type issues
    size = Number(size);

    // Create an array to store chunks
    let chunks = [];

    // Loop through the string in steps of 'size'
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.substring(i, i + size));
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));