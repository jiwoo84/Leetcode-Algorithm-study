//2022.10.09.

// 73. Set Matrix Zeroes
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.
/* Example
    matrix                              output
    [[1,1,1],[1,0,1],[1,1,1]]           [[1,0,1],[0,0,0],[1,0,1]]
    [[0,1,2,0],[3,4,5,2],[1,3,1,5]]     [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zero = [];
  matrix.forEach((arr, i) =>
    arr.forEach((v, j) => {
      if (v === 0) zero.push([i, j]);
    })
  );
  while (zero.length) {
    const [i, j] = zero.pop();
    for (let n = 0; n < matrix.length; n++) matrix[n][j] = 0;
    for (let n = 0; n < matrix[0].length; n++) matrix[i][n] = 0;
  }
};
