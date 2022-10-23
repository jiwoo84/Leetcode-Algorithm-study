/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 
 * 0이 있는 행과 열을 모두 0으로
 * Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: [[1,0,1],[0,0,0],[1,0,1]]
 * 
 * Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 * 
 */
 var setZeroes = function(matrix) {
    let row = [];
    let col = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                row.push(i);
                col.push(j);
            }
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (row.includes(i) || col.includes(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]);
