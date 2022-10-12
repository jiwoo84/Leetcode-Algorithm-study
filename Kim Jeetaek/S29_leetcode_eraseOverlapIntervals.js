//2022.10.09.

// 435. Non-overlapping Intervals
// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
/* Example
    intervals                   output
    [[1,2],[2,3],[3,4],[1,3]]   1
    [[1,2],[1,2],[1,2]]         2
    [[1,2],[2,3]]               0
*/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
/* [[1,100],[11,22],[1,11],[2,12]]
    인터벌에 겹치는 걸 버리는 게 아니라 (1~100)
    이어지지 않는 인터벌을 찾는 건가?   (1~11~22)
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const interval = intervals[0];
  let answer = 0;
  for (let i = 1; i < intervals.length; i++)
    if (intervals[i][1] > interval[1]) interval[1] = intervals[i][1];
    else answer++;
  return answer;
};*/
/* [[0,1],[3,4],[1,2]]
    ...(0~1~2, 3~4) 모르겠다
var eraseOverlapIntervals = function (intervals) {
  const map = new Map(); // {end:[0,0,0...start]}
  intervals.sort((a, b) => a[0] - b[0]);
  for (const interval of intervals)
    if (map.get(interval[0]))
      map.set(interval[1], [...map.get(interval[0]), interval[0]]);
    else map.set(interval[1], [interval[0]]);
  let result = 0;
  [...map.values()].forEach((arr) => (result = Math.max(result, arr.length)));
  return intervals.length - result;
};*/
// 겹치는 걸 버리는 게 맞다. 단지 "버리는 수를 최소화"
// 인터벌이 이어지지 않는다고 버리는 게 아닌 새로 인터벌을 만드는 것
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1], // 인터벌 요소가 음수일 수 있기 때문에 0을 기준으로 삼을 수 없음
    count = 1;
  for (let i = 1; i < intervals.length; i++)
    if (intervals[i][0] >= end) {
      end = intervals[i][1];
      count++;
    }
  return intervals.length - count;
};
