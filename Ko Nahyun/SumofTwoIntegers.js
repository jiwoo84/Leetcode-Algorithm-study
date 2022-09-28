/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */


// 참고한 부분 :: carry값 전달하는 방법 -> shift 연산 사용

var getSum = function (a, b) {
    if(a & b) {
        return getSum(a ^ b, (a & b) << 1);
    }
    return a ^ b;
};
