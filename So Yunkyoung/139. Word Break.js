/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * Input: s = "leetcode", wordDict = ["leet","code"]
 * Output: true
 * Input: s = "applepenapple", wordDict = ["apple","pen"]
 * Output: true
 */
 // Time Limit Exceeded
// var wordBreak = function(s, wordDict) {
//     if(s.length === 0) return true;
//     for(let word of wordDict){
//         if(s.indexOf(word) === 0){
//             if(wordBreak(s.slice(word.length), wordDict)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// dp 풀이 참고
var wordBreak = function(s, wordDict) {
    let dp = Array(s.length + 1).fill(false);
    dp[0]= true;
    for(let i = 0; i < s.length+1; i++){
        for(let word of wordDict){
            if(dp[i - word.length] && s.slice(i - word.length, i) === word){
                dp[i] = true; // 단어의 시작인 부분을 true로 만듦
            }
        }
    }
    return dp[dp.length - 1];
};
