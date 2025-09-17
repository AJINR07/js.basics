const sentence = "The Lord of Rings";
const words = sentence.split(" ");
{
const lonWord = words.reduce((long, curr) =>
    curr.length > long.length ? curr : long, "");

console.log(lonWord);
}