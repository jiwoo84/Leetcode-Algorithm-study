/**
 * @param {number[][]} intervals
 * @return {number}
 * Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
 * Output: 1
 * Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
 * 
 * Input: intervals = [[1,2],[1,2],[1,2]]
 * Output: 2
 * Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
 * 
 * Input: intervals = [[1,2],[2,3]]
 * Output: 0
 */
 var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    let count = 0;
    let pre = intervals[0][1];
    for(let i = 1; i < intervals.length; i++){
        if(pre > intervals[i][0]){
            count++;
            if(pre > intervals[i][1])  pre = intervals[i][1];
            // [1,4],[2,3],[3,4]와 같은 경우     
        }
        else pre = intervals[i][1];
    }
    console.log(count);
    return count;
};
eraseOverlapIntervals([[1,4],[2,3],[3,4]]);
