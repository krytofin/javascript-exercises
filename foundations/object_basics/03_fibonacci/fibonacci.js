const fibonacci = function(num) {
    if (num < 0)
        return "OOPS";
    if (num == 0)
        return 0;
    if (num <= 2)
        return 1;
    
    let a = 1;
    let b = 1;
    for (let i=0; i<num-2; i++){
        let c = b;
        b = a + b;
        a = c;
    }
    return b;
};
// Do not edit below this line
module.exports = fibonacci;
