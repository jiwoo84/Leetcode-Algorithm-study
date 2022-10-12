//2022.10.05.

// 207. Course Schedule
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// Return true if you can finish all courses. Otherwise, return false.
// All the pairs prerequisites[i] are unique.
/* Example
    numCourses  prerequisites   output
    2           [[1,0]]         true
    2           [[1,0],[0,1]]   false
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/* 제출만 하면 틀리는데 그 input을 TestCase에 넣어서 돌려보면 맞다고 나오는 신기한 코드
const map = new Map();
var canFinish = function (numCourses, prerequisites) {
  for (let p of prerequisites)
    if (map.has(p[0])) map.get(p[0]).push(p[1]);
    else map.set(p[0], [p[1]]);
  while (numCourses > 0) {
    if (cannot(numCourses - 1)) return false;
    numCourses--;
  }
  return true;
};
function cannot(course) {
  if (!map.has(course)) return false;
  const visited = new Set().add(course),
    queue = [...map.get(course)];
  while (queue.length > 0) {
    const target = queue.shift();
    if (queue.includes(target)) return false;
    if (visited.has(target)) return true;
    visited.add(target);
    if (map.has(target)) queue.push(...map.get(target));
  }
  return false;
}*/
var canFinish = function (numCourses, prerequisites) {
  const map = new Map(),
    arr = [];
  // map: [key-선행 강의, value-목표 강의들], arr: [index-목표 강의, value-선행 강의 개수]
  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
    arr.push(0);
  }
  for (let p of prerequisites) {
    map.get(p[1]).push(p[0]);
    arr[p[0]]++;
  }
  // 선행 강의가 없는 강의부터 타겟 지정
  const queue = [];
  for (let i = 0; i < numCourses; i++) if (arr[i] === 0) queue.push(i);
  while (queue.length > 0) {
    const target = queue.shift();
    // 목표 강의를 수강했을 때, 그 목표 강의를 선행 강의로 하는 다른 강의들의 선행 강의 개수를 차감
    for (let i of map.get(target)) {
      arr[i]--;
      if (arr[i] === 0) queue.push(i); // 선행 강의를 다 들었으면 해당 목표 강의도 타겟 지정
    }
  }
  // 선행 강의 개수가 남은 목표 강의가 있으면 false
  for (let v of arr) if (v > 0) return false;
  return true;
};
