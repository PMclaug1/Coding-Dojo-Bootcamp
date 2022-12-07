
  function removeDupes(str) {
    var result = "";
    var freq = {};
    for(i=0;i<str.length;i++){
       var char = str[i];
       if(freq[char]) {
        freq[char]++;      
       } else {
        freq[char] =1
        result = result+char;
       }
    }
    console.log(result);
    return result;
  }


  const str1 = "abcABCabcABCabcABC";

  const str2 = "helloo"

  
  removeDupes(str1)
  removeDupes(str2)


const strB = "hello world"
const strC = "abc def ghi"

