/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const visited = {};
    return DFS(node);

    function DFS(node){
        if(!node) return;
        if(visited[node.val]) return visited[node.val];

        let newNode = new Node(node.val, []);
        visited[node.val] = newNode;
        
        for(let i = 0 ; i < node.neighbors.length ; i++){
            newNode.neighbors.push(DFS(node.neighbors[i]));
        }
    
        return newNode;
    }
};
