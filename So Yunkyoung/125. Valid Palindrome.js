/**
 * @param {string} s
 * @return {boolean}
 * paindrome이란 앞으로 '수박은 박수'처럼 앞으로 읽어도 뒤로 읽어도 똑같은 말
 * paindrome이면 true 아니면 false
 */
let s= "0p";
var isPalindrome = function(s) {
    s= s.replace(/ /g, ''); // 모든 공백 제거 
    s= s.toLowerCase();
    s= s.replace(/[^a-z0-9]/g, "");

    if(s === '') return true;
    else {
        let reverseStr = "";
        for(let i = s.length - 1; i >= 0; i--){
            reverseStr += s[i];
        }
        console.log(s);
        console.log(reverseStr);
        if(reverseStr === s) return true;
        else return false;
    }
    
};
console.log(isPalindrome(s));

