
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
    // 斐波那契数列
        // 最初始
        var fib = function(n) {
          if (n == 1 || n ==2) {
            return 1
          } else {
            return fib(n-1) + fib(n-2)
          }
        }

        var fib = function(n) {
          let pre = 0 //前一个值
          let next = 0 //后一个值
          let data //当前值
          if ( n < 0) throw Error('xxx')
          if (n == 0) return 0
          if (n == 1 || n == 2) return 1
          if (n > 2) {
            for (let i = 2; i < nums.length; i++) {
              data = pre + next
              pre = next
              next = data
            }
          }
        }
      // 二分查找法
      function binarySearch(arr, target) {
        let max = arr.length - 1
        let min = 0
        while(min <= max) {
          let mid = Math.floor((max + min) / 2)
          if (target < arr[mid]) {
            max = mid - 1
          } else if (target > arr[mid]) {
            min = mid + 1
          } else {
            return mid
          }
        }
        return -1
      }

      //冒泡排序
      function bubbleSort(arr) {
        let len = arr.length
        for (let i = 0; i < len; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j +1]) {
              let temp = arr[j+1]
              arr[j+1] = arr[j]
              arr[j] = temp
            }
          }
        }
        return arr
      }

      function bubbleSort2(arr) {
        let low = 0;
        let high = arr.length - 1;
        let temp,j;
        while (low < high) {
          for (j = low; j < high; ++j) {
            if (arr[j] > arr[j + 1]) {
              temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp
            }
            --high;
            for (j = high; j > low; --j) {
              if (arr[j] < arr[j - 1]) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp
              }
            }
            ++low;
          }
        }
        return arr
      }