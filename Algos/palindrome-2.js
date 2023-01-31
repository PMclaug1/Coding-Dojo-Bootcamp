/* 
  Given to me (Neil) in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.
  What is it about a string that makes it possible for it to become a palindrome?
  a word, phrase, or sequence that reads the same backward as forward
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
    if (str.length < 1) {
        return false;
    }
    
    let hashmap = {}
    for(let i = 0; i < str.length; i++){
        if(str[i] === " ") continue
        let char = str[i]
        if(hashmap[str[i]]){
            hashmap[str[i]]-- 
        } else {
            hashmap[str[i]] = 1
        }
    }
    let arr = []
    for(let char in hashmap)
        if(hashmap[char] > 0)
            arr.push(char)
    return arr.length === 1 || arr.length === 0
}



console.log(canStringBecomePalindrome(str1));