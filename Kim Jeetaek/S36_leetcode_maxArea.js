//2022.10.23.

// 11. Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.
/* Example
    height                  output
    [1,8,6,2,5,4,8,3,7]     49
    [1,1]                   1
*/
/**
 * @param {number[]} height
 * @return {number}
 */

/* Time Limit Exceeded at 55. case (length:71050)
var maxArea = function (height) {
  let answer = 0;
  for (let i = 0; i < height.length - 1; i++)
    for (let j = i + 1; j < height.length; j++)
      answer = Math.max(answer, (j - i) * Math.min(height[i], height[j]));
  return answer;
};*/

// 굉장히 비효율적... 하지만 Success
var maxArea = function (height) {
  const arr = []; // [[left index, max from left]]
  arr.push([0, 0]);
  for (let i = 1; i < height.length; i++)
    for (let j = 0; j < arr.length; j++) {
      const left = arr[j][0];
      arr[j][1] = Math.max(
        arr[j][1],
        (i - left) * Math.min(height[i], height[left])
      );
      if (j === arr.length - 1 && height[i] > height[left]) arr.push([i, 0]);
    }
  let max = 0;
  for (const a of arr) if (a[1] > max) max = a[1];
  return max;
};

// Discuss 참고 - 위에서 left만 기준으로 삼는 게 아닌, right까지 2 pointers로 하면 arr 필요없이 바로 max를 구할 수 있다
// 10배 정도 빠르다
var maxArea = function (height) {
  let max = (left = 0),
    right = height.length - 1;
  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[right], height[left]));
    if (height[left] < height[right]) left++;
    else if (height[left] > height[right]) right--;
    else left++, right--;
  }
  return max;
};
