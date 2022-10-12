/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * 
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

var insert = function(intervals, newInterval) {
    
    intervals.push(newInterval);
    intervals.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        else return a[0] - b[0]
    }) // 오름차순으로 정렬을 하는데 [a0, a1] [b0, b1] a0==b0면 a1,b0로 오름차순
    const result = [];
    let pre = intervals[0];
    for(let i = 1; i < intervals.length; i++){
        if(pre[1] < intervals[i][0]){
            // [1,2],[3,5] 의 경우 
            result.push(pre); 
            pre = intervals[i];
        }
        else {
            pre = [pre[0], Math.max(pre[1], intervals[i][1])];
        }
    }
    result.push(pre);
    return result;
};
