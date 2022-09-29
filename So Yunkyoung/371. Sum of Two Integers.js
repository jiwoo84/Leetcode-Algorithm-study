/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * a, b가 주어지는데 +와 -를 사용하지 않고 두 정수의 합 구하기
 * 
 * ex1)
 * Input: a = 1, b = 2
 * Output: 3
 * 
 * ex2)
 * Input: a = 1, b = 2
 * Output: 3
 */

var getSum = function(a, b) {
    // JS는 비트 연산시 스스로 2진수로 바꿔서 계산해줌. 굳이 toString(2) 안써도됨!
    while (b != 0) {
        // carry는 올림수가 있을 때 1이다.
        let carry = a & b;
        // a 와 b 를 더한 값을 a에 반영한다.
        a = a ^ b;
        // carry를 왼쪽으로 쉬프트
        b = carry << 1;
    }
    return a;
};
