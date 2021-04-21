// 1 ~ n 中缺失的數字  使用二分法
function missingNumber(nums) {
  let leftIndex = 0;
  let rightIndex = nums.length
  let midIndex
  if (leftIndex <= rightIndex) {
    midIndex = Math.floor((leftIndex + rightIndex)/2)
    nums[midIndex] = minIndex ? leftIndex + 1 : rightIndex + 1
  }
  return leftIndex
}
`
  // 根据题意，如果没有缺失数字，那么永远会有 nums[i] === i，但是由于缺失了数字，所以会有部分数据会出现 nums[i] !== i，所以，只要找到第一个 nums[i] !== i 这个 i 就是我们想要的答案
  // 由于是递增数列，并且 nums[i] 的范围已经被限制死，所以我们可以直接用二分法进行查找
  // 如果中间位 nums[i] === i 则想要找的数在中间位的右边
  // 如果中间位 nums[i] !== i 则想要找的数在中间位的左边
  // 引入左指针 leftI、右指针 rightI、以及中间指针 midI
  // 如果 midI === nums[midI] 则 leftI 右移到 midI 右边一位
  // 如果 midI !== nums[midI] 则 rightI 左移到 midI 左边一位
  // 如果 leftI > rightI 遍历结束`