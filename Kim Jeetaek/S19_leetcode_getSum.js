//2022.09.27.

// 371. Sum of Two Integers
// Given two integers a and b, return the sum of the two integers without using the operators + and -.
/* Example
    a   b   output
    1   2   3
    2   3   5
*/
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  // 1 = 1, 2 = 10, 3 = 11, 5 = 101, 4 = 100, 7 = 111
  // a^b: 하나만 1이어야 1, a&b: 둘 다 1이어야 1
  if (b === 0) return a;
  return getSum(a ^ b, (a & b) << 1);
};
