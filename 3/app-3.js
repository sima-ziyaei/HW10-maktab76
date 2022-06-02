function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

let a = isJsonString('sima')
let b = isJsonString('{ "Name": "sima" }')
console.log(a);
console.log(b);