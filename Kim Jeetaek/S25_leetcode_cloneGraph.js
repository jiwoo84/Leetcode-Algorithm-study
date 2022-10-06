//2022.10.04.

// 133. Clone Graph
// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
/* Java
    class Node {
        public int val;
        public List<Node> neighbors;
    }
*/
/* Example
    adjList                     output
    [[2,4],[1,3],[2,4],[1,3]]   [[2,4],[1,3],[2,4],[1,3]]
    [[]]                        [[]]
    []                          []
*/
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null; // 예시 3번처럼 빈값이 오면 null을 반환
  const copy = new Map(),
    queue = [node]; // 복사 후 저장해둘 Map, 복사할 노드를 넣어둘 Array 생성
  copy.set(node, new Node(node.val)); // 진행한 노드를 key로, 복사한 값을 value로 저장
  // 더 이상 복사할 게(queue) 없을 때까지
  while (queue.length > 0) {
    const target = queue.shift(); // while 한 바퀴에 복사할 노드 추출 - 먼저 들어온 순
    // target이 가진 이웃 노드들을 하나씩 확인
    for (const neighbor of target.neighbors) {
      if (!copy.has(neighbor)) {
        copy.set(neighbor, new Node(neighbor.val)); // 이웃 노드가 copy에 없으면 저장
        queue.push(neighbor); // 복사한 노드도 이웃 노드를 갖고 있으니 다음 타겟으로 삼기 위해 queue에 삽입
      }
      // copy는 1 depth로 복사된 것이기 때문에 값.neighbors 부분은 빈 배열로 저장되므로 그 배열에 이웃 노드를 삽입
      copy.get(target).neighbors.push(copy.get(neighbor));
    }
  }
  return copy.get(node);
};
