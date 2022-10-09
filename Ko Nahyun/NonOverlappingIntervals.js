/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let cnt = 0;

    intervals.sort((a,b) => a[0]-b[0]);

    let prevEnd = intervals[0][1];
    for(let i = 1 ; i < intervals.length ; i++){
        if(prevEnd > intervals[i][0]){ // 겹치는 경우
            cnt++;    // 뒤의 요소를 삭제
            prevEnd = Math.min(prevEnd, intervals[i][1]);
            
        }else{ // 겹치지 않는 경우 
            prevEnd = Math.max(prevEnd, intervals[i][1]);
        }
    }
    return cnt;
};
