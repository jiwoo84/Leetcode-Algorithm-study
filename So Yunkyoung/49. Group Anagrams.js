/**
 * @param {string[]} strs
 * @return {string[][]}
 * ex1)
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
let strs = ["eat","tea","tan","ate","nat","bat"];
var groupAnagrams = function(strs) {
    let anagrams = {};
    for(let str of strs) { 
        let key = str.split('').sort().join(''); // key = aet, ant, abt
        if(key in anagrams) anagrams[key].push(str);
        else {
            anagrams[key] = [];
            anagrams[key].push(str);
        }
        // 지택님 코드가 더 
        // if(anagrams[key]) anagrams[key].push(str); 
        // else anagrams[key] = [str];
    }
    console.log(Object.values(anagrams)); 
    return Object.values(anagrams);
};
groupAnagrams(strs);
