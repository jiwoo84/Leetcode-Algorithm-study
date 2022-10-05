/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    const len = intervals.length;
    const res = [];
    let [newStart, newEnd] = newInterval;

    let i = 0;
    while(i < len && newStart > intervals[i][1]){
        res.push(intervals[i]);
        i++;
    }
    while(i < len && newEnd >= intervals[i][0]){ // overlap
        newStart = Math.min(newStart, intervals[i][0]);
        newEnd = Math.max(newEnd, intervals[i][1]);
        i++;
    }
    res.push([newStart, newEnd]);

    while(i < len){
        res.push(intervals[i]);
        i++;
    }

    return res;
};
