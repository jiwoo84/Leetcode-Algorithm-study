/**
 * @param {number} numCourses // 들어야하는 과목 수 
 * @param {number[][]} prerequisites [[후수과목, 선수과목], ...]
 * @return {boolean}
 * 
 * Input: numCourses = 2 => course 0,1가 있음
 * , prerequisites = [[1,0]] => 순서: course 0 -> course 1
 * Output: true
 * Input: numCourses = 4, prerequisites = [[1,2], [2,3], [3,1]]
 * Output: false
 */
var canFinish = function(numCourses, prerequisites) {

    const inDegree = new Array(numCourses).fill(0);
    
    for(const pre of prerequisites) {
        inDegree[pre[0]]++
    }
    const zeroDegree = [];
    
    for(let i = 0; i < numCourses; i++) {
        if(inDegree[i]===0) {
            zeroDegree.push(i);
        }
    }
    console.log(inDegree);
    
    if(zeroDegree.length === 0) return false; 
    // [[1,0], [0,1]] 처럼 선수과목 = 후수과목이 되는 경우는 zeroDegree가 0이 됨. 
    // 계층적?이지 않으므로. 선수과목이 하나는 있어야 하는데 모두다 후수과목인거니... false

    // 선수과목과 후수과목 묶음을 제거하는 while문.
    // 1->2->3->1이런 경우에는 묶음이 제거되지 않음?
    while(zeroDegree.length) {
        const course = zeroDegree.pop();
        for(const pre of prerequisites) {
            if(course === pre[1]) {
                inDegree[pre[0]]--
                if(inDegree[pre[0]]===0){
                    zeroDegree.push(pre[0])
                }
            }
        }
    }
    // inDegree가 모두 0이어야 true
    for(const num of inDegree) {
        if(num!== 0) return false
    }
    return true;
};
// console.log(canFinish(4,[[1,2], [2,3], [3,1]]));
// console.log(canFinish(4,[[0,1], [0,2], [1,3],[2,3]]));
