/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    
    const map = new Map();
    
    let start = 0;
    let max = 0;
    
    for(let i = 0 ; i < s.length ; i++){
        
        if(map.get(s[i]) >= start) { // start~i 구간에서의 중복 값 유무
            start = map.get(s[i]) + 1;
        }
        map.set(s[i], i);
        max = Math.max(max, (i+1) - start);
    }
    return max;
}
