/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const map = {};
    const visited = Array.from({length: numCourses}, () => [0]);

    for(let [second, first] of prerequisites){ // {0:[1], 1: [0]}
        map[first] = map[first] ? [...map[first], second] : [second];
    }
  
    function DFS(courseNum){ // 0
        
        if(visited[courseNum] == 1) return false;
        if(!map[courseNum]) return true;

        visited[courseNum] = 1;
        
        for(let i = 0 ; i < map[courseNum].length ; i++){
            if(!DFS(map[courseNum][i])) return false;
        }
        visited[courseNum] = 0;
        map[courseNum] = [];   
        
        return true;
    }

    for(let i = 0 ; i < numCourses ; i++){
        if(!DFS(i)) return false;
    }
    return true;
};
