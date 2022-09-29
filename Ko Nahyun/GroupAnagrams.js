/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const map = new Map();
    
    for(let i = 0 ; i < strs.length ; i++){
        let key = [...strs[i]].sort().join('');
        
        if(!map.has(key)){
            map.set(key, [strs[i]]);
        }else{
            map.set(key, [...map.get(key), strs[i]]);
        }
    }
    
    const res = [];
    
    for(let [key, value] of map){
        res.push(value);
    };
    
    return res;
};
