/**
 * @param {string} s
 * @return {number}
 * Input: s = "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 * 
 * Input: s = "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa". 이 경우때문에 그냥 count로 바꿈
 */

var countSubstrings = function(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let left = i;
        let right = i;
        // s[i]를 중심으로 palindromes 찾기
        while(left >= 0 && right < s.length && s[left] === s[right]){
            count++;
            left--;
            right++;
        }
        // s[i] s[i+1] 중심으로 palindromes 찾기
        left = i; right = i + 1;
        while(left >= 0 && right < s.length && s[left] === s[right]){
            count++;
            left--;
            right++;
        }
    }
    return count;
};
