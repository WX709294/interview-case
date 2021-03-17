
// 两数之和
    var twoSum = function(nums, target) {
      let map = []
      for (let i = 0; i < nums.length; i++) {
        if (map.has(target - map[i])) {
          return [map.get(target-map[i]), i]
        } else{
          map.set(nums[i], i);
        }
      }
      return [];
    }


    let a = 123
    a = 0 + 3
    result = 3 / 10 | 0



    // https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
    // 删除数组里面的重复项  使用双指针
   let nums = [2, 3, 3]
  let a = function(nums) {
      let p1 = 0
      let p2 = 0
      while(p2 < nums.length) {
        console.log('p1', new Date().getTime())
        if (nums[p1] != nums[p2]) {
          p1++
          console.log('p1', new Date().getTime())
          nums[p1] = nums[p2]
        }
        p2++
      }
      return p1+1
    }