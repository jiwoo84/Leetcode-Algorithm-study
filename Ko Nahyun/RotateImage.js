/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    
    for(let i = 0 ; i < ~~(n/2) + n%2 ; i++){
        for(let j = 0 ; j < ~~(n/2) ; j++){
            
            let temp = matrix[n-1-j][i];

            matrix[n-1-j][i] = matrix[n-1-i][n-1-j];
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i];
            matrix[j][n-1-i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
    return matrix;
};
