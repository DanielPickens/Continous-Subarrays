function countSubarrays(arr) {
 
  let len = arr.length;
  let output = [arr.length];
  
  for (let i = 0; i < len; i++) { 
    output[i] = 1;
    
    // move right
    for (let j = i + 1; j < len; j++) {
      if (arr[i] <= arr[j]) {
        break;
      }
      output[i]++;
    }
    
    // move left
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] <= arr[j]) {
        break;
      }
      output[i]++;
    }
  }
  
  return output;
}
