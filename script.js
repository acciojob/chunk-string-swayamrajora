function chunkString(str, chunkLength) {
    if (!str) return []; // Return [] if str is null or undefined

    chunkLength = Number(chunkLength);
    if (isNaN(chunkLength) || chunkLength <= 0) return [];

    const chunks = [];

    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.substring(i, i + chunkLength));
    }

    return chunks;
}
