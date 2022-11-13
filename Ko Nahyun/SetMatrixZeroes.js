/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const set = new Set();
   
   for(let row = 0 ; row < m ; row++){
       let isIncludeRowZero = false;

       for(let col = 0 ; col < n ; col++){
           if (matrix[row][col] === 0) {
               isIncludeRowZero = true;
               set.add(col);
               for (let k = 0 ; k <= row ; k++) {
                   matrix[k][col] = 0;
                }
           }
           else{
              if (set.has(col)) matrix[row][col] = 0;  
           }
       } // row end
       if (isIncludeRowZero) { // 기존에 0값이 한 행에 존재 했는가
           for (let k = 0 ; k < n ; k++) {
               matrix[row][k] = 0;
            }
        isIncludeRowZero = false;
       }
   }
    return matrix;
};
