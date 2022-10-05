//2022.10.05.

// 57. Insert Interval
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.
/* Example
    intervals                               newInterval     output
    [[1,3],[6,9]]                           [2,5]           [[1,5],[6,9]]
    [[1,2],[3,5],[6,7],[8,10],[12,16]]      [4,8]           [[1,2],[3,10],[12,16]]
*/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
/* [[1,5]] [0,0] => [[0,0],[1,5]] ...갈아엎어
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  const answer = [],
    temp = new Array(Math.max(...intervals.flat(), ...newInterval) + 1).fill(
      false
    );
  while (intervals.length > 0) {
    const target = intervals.shift();
    for (let i = target[0]; i <= target[1]; i++) temp[i] = true;
    if (newInterval[0] <= target[1]) {
      for (let i = newInterval[0]; i <= newInterval[1]; i++) temp[i] = true;
      newInterval = [];
    }
    if (intervals.length === 0 || !temp[intervals[0][0]]) {
      const interval = [];
      for (let i = 0; i < temp.length; i++) if (temp[i]) interval.push(i);
      answer.push([interval[0], interval.pop()]);
      temp.fill(false);
    }
  }
  if (newInterval.length > 0) answer.push(newInterval);
  return answer;
};*/
var insert = function (intervals, newInterval) {
  const answer = [],
    temp = new Array(Math.max(...intervals.flat(), ...newInterval) + 1).fill(
      false
    ); // 인터벌 여부를 볼 배열 - 인덱스가 곧 인터벌 값
  while (intervals.length > 0) {
    // intervals의 값들이 newInterval로 인해 합쳐지느냐 혹은 newInterval이 그저 새로 생기느냐
    const target = intervals.shift();
    if (newInterval.length > 0)
      if (newInterval[1] < target[0]) {
        // newInterval이 앞으로 삽입되는 경우
        for (let i = newInterval[0]; i <= newInterval[1]; i++) temp[i] = true;
        intervals.unshift(target); // 쓰이지 않은 target은 다시 대기열로
        newInterval = []; // 쓰인 newInterval은 제거
      } else if (target[1] < newInterval[0])
        // newInterval 구간과 겹치지 않는 경우
        for (let i = target[0]; i <= target[1]; i++) temp[i] = true;
      else {
        // newInterval 구간과 겹치는 경우
        for (
          let i = Math.min(newInterval[0], target[0]);
          i <= Math.max(newInterval[1], target[1]);
          i++
        )
          temp[i] = true; // 더 긴 구간으로 통합
        newInterval = []; // newInterval 제거
      }
    // 이미 newInterval이 합류한 경우
    else for (let i = target[0]; i <= target[1]; i++) temp[i] = true;
    // 한 인터벌이 끝났으면 answer에 저장
    if (intervals.length === 0 || !temp[intervals[0][0]]) {
      answer.push([temp.indexOf(true), temp.lastIndexOf(true)]);
      temp.fill(false); // 다음 인터벌 여부를 위해 초기화
    }
  }
  // 기존 인터벌이 끝난 다음에 newInterval이 생기는 경우
  if (newInterval.length > 0) answer.push(newInterval);
  return answer;
};
// 위 방식이 뻘짓이란 걸 보여주는 코드 ...그래도 방향성은 같았다
var insert = function (intervals, newInterval) {
  const answer = [];
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (newInterval[1] < start) {
      answer.push(newInterval);
      return answer.concat(intervals.slice(i));
    } else if (end < newInterval[0]) answer.push(intervals[i]);
    else
      newInterval = [
        Math.min(start, newInterval[0]),
        Math.max(end, newInterval[1]),
      ]; // 기존 인터벌 구간과 newInterval 구간이 겹칠 때 가장 긴 구간으로 초기화해줌으로써 첫 조건문에 걸리게끔 만듦. for문 마지막 회전이었으면 아래 answer.push()로 합쳐서 반환함
  }
  answer.push(newInterval);
  return answer;
};
