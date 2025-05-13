function stringChop(str, size) {
    if (!str) return [];
    size = Number(size);
    let chunks = [];


    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.substring(i, i + size));
    }

    return chunks;
}

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));