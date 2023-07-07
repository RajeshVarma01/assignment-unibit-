//1. Two integers' sum equals the target and return a 2D array.

function Sum(arr, target) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          result.push([arr[i], arr[j]]);
        }
      }
    }
  
    return result;
  }
  
  let arr1 = [1, 3, 2, 2, -4, -6, -2, 8];
  let target = 4;
  
  let Resultone = Sum(arr1, target);
  console.log(Resultone);

  //The above code determines which two integers' sum equals the target and return a 2D array.
  

//2. After Merging and Sorting.

let arr2 = [1, 3, 2, 2, -4, -6, -2, 8];

let aftermerging = arr1.sort((a, b) => a - b);

console.log(aftermerging);

//The above code returns a single array from the 2D array after merging and sorting.


//3. This is the Doubled array which doubles the target value to 8. 

function DoubledArr(arr, doubleTarget) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === doubleTarget) {
          result.push([arr[i], arr[j]]);
        }
      }
    }
  
    return result;
  }
  
  let mergedAndSorted = [-6, -4, -2, 1, 2, 2, 3, 8];
  let Double = target * 2;
  
  let Result = DoubledArr(mergedAndSorted, Double);
  console.log(Result);
  