//2022.10.11.

// 48. Rotate Image
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
/* Example
    matrix                      output
    
    [[1,2,3],[4,5,6],[7,8,9]]   [[7,4,1],[8,5,2],[9,6,3]]

    [[5,1,9,11],[2,4,8,10],     [[15,13,2,5],[14,3,4,1],
    [13,3,6,7],[15,14,12,16]]   [12,6,8,9],[16,7,10,11]]
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // matrix[i][j] <= matrix[(matrix.length-1)-j][i]
  const max = matrix.length - 1;
  // 한 행씩 확인
  let i = 0;
  while (i < max) {
    // 행의 요소가 지나갈, 지나간 열은 점프
    for (let j = i; j < max - i; j++) {
      const temp = matrix[i][j];
      let x = i,
        y = j;
      // temp가 있던 자리에 올 것, 그 자리에 올 것, 또 올 것... 네 군데끼리 교환
      for (let cnt = 0; cnt < 3; cnt++) {
        const tmp = max - y;
        matrix[x][y] = matrix[tmp][x];
        y = x;
        x = tmp;
      }
      matrix[x][y] = temp;
    }
    i++;
  }
};
