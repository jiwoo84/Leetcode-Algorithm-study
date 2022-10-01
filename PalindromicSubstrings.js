/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
/* 
    let cnt = s.length;
    
    for(let i = 0 ; i < s.length ; i++){
        for(let j = s.length-1 ; j > i ; j--){
            if(s[i] !== s[j]) continue;

            let k = i+1;
            let isPalindrome = true;
            while(k <= ~~((i+j) / 2)) {
                if(s[k] !== s[j-k+i]) {
                    isPalindrome = false;
                    break;
                }
                k++;
            }
            if(isPalindrome) cnt++;
        }
    }
    return cnt;
*/

    let cnt = 0;
    let start = 0, end = 0;

    for(let i = 0 ; i < s.length ; i++) {
        
        start = i;
        end = i;
        while(start >=0 && end <= s.length-1  && s[start] === s[end]){
            cnt++;
            start--;
            end++;
        }

        start = i;
        end = i+1;
        while(start >= 0 && end <= s.length-1 && s[start] === s[end]){
            cnt++;
            start--;
            end++;
        }
    }
    return cnt;
}
