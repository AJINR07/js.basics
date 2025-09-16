function capWord(strr){
    return strr.split(" ").map (word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
const strr = "capatlize each word in the line";
console.log(capWord(strr));
