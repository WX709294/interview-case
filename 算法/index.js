// 冒泡排序
function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 1; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

//选择排序
function selectionSort(arr) {
  let len = arr.length
  let minIndex, temp
  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j 
      }
    }
    temp = arr[j]
    arr[j] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

//插入排序
function insertionSort(arr) {
  let len = arr.length
  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >=0 && arr[preIndex] > current) {
      arr[preIndex+1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex+1] = current
  }
  return arr
}