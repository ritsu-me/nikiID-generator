//NOTE:Function for creating Crypto
function createCrypto(num) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@-_+*\^~!#$%&";
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }return result;
}

//NOTE:Send Crypto to console
console.log(createCrypto(126));

//NOTE:Exports Crypto to other file
module.exports.createCrypto = createCrypto(126)