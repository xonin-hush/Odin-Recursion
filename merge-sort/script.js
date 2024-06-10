function mergeSort(array) {
    if (array.length <= 1) {
       return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
 }
  
 function merge(left, right) {
    const result = [];
     
    while (left.length && right.length) {
       if (left[0] < right[0]) {
          result.push(left.shift());
       } else {
        
          result.push(right.shift());
       }
    }
     
    return [...result,...left,...right];
 }
 const array = [4, 1, 5, 2, 6, 3, 7, 8];
 console.log(mergeSort(array));