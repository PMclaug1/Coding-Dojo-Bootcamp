function reverseWords(str) {
    var word = "";
    var space = false;
    var result = "";
    for (let i = 0; i < str.length; i++){
        if(str[i] == " " && space == false){
            result += word;
            result += " ";
            space = true;
            word = "";
        } else {
            space = false;
            word = str[i] + word;
        }
    } 
    result += word;
    return result;
}

console.log(reverseWords(strA)) //expectedA: olleh
console.log(reverseWords(strB)) //expectedB: olleh dlrow
console.log(reverseWords(strC)) //expectedC: cba fed ihg