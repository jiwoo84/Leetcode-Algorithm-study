/**
 * @param {string} s
 * @return {number}
 * ex1)
 * Input: s = "abcabcbb"
 * Output: 3 (Explanation: The answer is "abc")
 * 
 * ex2)
 * Input: s = "bbbbb"
 * Output: 1 (Explanation: The answer is "b")
 * 
 * ex3) 
 * Input: s = "pwwkew"
 * Output: 3 (Explanation: The answer is "wke")
 */

var lengthOfLongestSubstring = function(s) {
    let arrStr = s.split('');
    let temp = '';
    let tempArr = []; 
    for(let str of arrStr){
        if(temp.indexOf(str) < 0) {
            temp += str;
        }
        else {
            tempArr.push(temp);
            temp = temp.substring(temp.indexOf(str) + 1) + str;
        }
    }
    tempArr.push(temp); // 마지막 temp 넣어줘야됨!!! - 지우님 풀이 듣고 풀다가 문제를 알아냄bb
    let eachLength = tempArr.map(x => x.length); // tempArr에 담긴 문자열들의 길이 구하기
    return Math.max(...eachLength);
};
console.log(lengthOfLongestSubstring(' '));



