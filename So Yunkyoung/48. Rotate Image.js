/**
 * @param {number[][]} matrix
 * @return {void} 
 * Do not return anything, modify matrix in-place instead.
 * 새로운 배열을 만들지 않고 n x n 배열을 시계방향으로 90도 회전
 * 
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[7,4,1],[8,5,2],[9,6,3]]
 */
var rotate = function(matrix) {
    // 1 2 3     7 8 9
    // 4 5 6  => 4 5 6
    // 7 8 9     1 2 3
    matrix = matrix.reverse();

    // 7 8 9     7 4 1
    // 4 5 6  => 8 5 2
    // 1 2 3     9 6 3
    let temp;
    for(let i = 0; i < matrix.length; i++){
        for(let j = i + 1; j < matrix.length; j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

};
// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// rotate(matrix);
// console.log(matrix);
