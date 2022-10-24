/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 * 배열 height는 xy좌표로 나타낼 경우 (i, height[i]) 
 * 가장 큰 넓이를 가진 사각형 만들기
 * height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * (1,8)과 (8,7)이 만든 사각형의 넓이 = 49
 */
var maxArea = function(height) {
    let max = 0;
	let left = 0;
	let right = height.length - 1;

	while (left < right) {
		let smallHeight = Math.min(height[left], height[right]);
		let area = (right - left) * smallHeight;
		if (area > max) max = area;
    else{
        // 무작정 left++하면 안됨... 이거 때문에 한참을 고민함 ㅜㅜ
        if (height[left] < height[right]) left++;
		    else right--;
    }
	}
    return max;
};
