const palindromes = function (input) {
    const toReplace = ['!', ',', '.', " "];
    for (let char of toReplace){
        while (input.includes(char)){
            input = input.replace(char, "");
        }
    }
    input = input.toLowerCase();
    return input == input.split("").reverse().join("");
};
// Do not edit below this line
module.exports = palindromes;
