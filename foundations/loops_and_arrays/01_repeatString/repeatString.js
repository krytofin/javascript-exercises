function repeatString(str, count){
    if (count < 0){
        return "ERROR";
    }
    let result_str = "";
    for (let i=0; i<count; i++){
        result_str += str;
    }
    return result_str;

}

// Do not edit below this line
module.exports = repeatString;
