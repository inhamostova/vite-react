export const RepeatingJS = () => {
  //   function sumArray(arr) {
  //     let sum = 0;
  //     for (let i = 0; i < arr.length; i += 1) {
  //       sum += arr[i];
  //     }
  //     console.log(sum);
  //   }
  //   function sumArray(arr) {
  //     const sum = arr.reduce((acc, num) => {
  //       acc += num;
  //       return acc;
  //     }, 0);
  //     console.log(sum);
  //   }
  //   const findMax = (arr) => {
  //     let max = arr[0];
  //     for (let i = 1; i < arr.length; i += 1) {
  //       max = max > arr[i] ? max : arr[i];
  //     }
  //     return max;
  //   };

  //   const reverseString = (str) => {
  //     let reverseStr = "";
  //     for (let i = str.length - 1; i >= 0; i -= 1) {
  //       reverseStr += str[i];
  //     }
  //     return reverseStr;
  //   };

  //   console.log(reverseString("hello")); // "olleh"
  //   console.log(reverseString("JavaScript")); // "tpircSavaJ"
  //   console.log(reverseString("12345")); // "54321"

  //   function countVowels(str) {
  //     const VOWELS = ["a", "e", "i", "o", "u"];
  //     let total = 0;
  //     for (let i = 0; i < str.length; i += 1) {
  //       if (VOWELS.includes(str[i].toLowerCase())) {
  //         total += 1;
  //       }
  //     }
  //     return total;
  //   }

  //   console.log(countVowels("hello")); // 2
  //   console.log(countVowels("JavaScript")); // 3
  //   console.log(countVowels("AEIOU")); // 5
  //   console.log(countVowels("rhythm"));

  //   function removeDuplicates(arr) {
  //     const newArr = [];
  //     for (const item of arr) {
  //       if (!newArr.includes(item)) {
  //         newArr.push(item);
  //       }
  //     }
  //     return newArr;
  //   }

  //   console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
  //   // [1, 2, 3, 4]

  //   console.log(removeDuplicates(["a", "b", "a", "c"]));
  //   // ["a", "b", "c"]

  //   console.log(removeDuplicates([5, 5, 5, 5]));
  //   // [5]

  //   function findDuplicates(arr) {
  //     const newArr = [];
  //     for (let i = 0; i < arr.length; i += 1) {
  //       if (arr.includes(arr[i], i + 1) && !newArr.includes(arr[i])) {
  //         newArr.push(arr[i]);
  //       }
  //     }
  //     return newArr;
  //   }

  //   console.log(findDuplicates([1, 2, 3, 2, 4, 1]));
  //   // [1, 2]

  //   console.log(findDuplicates(["a", "b", "c", "a", "b"]));
  //   // ["a", "b"]

  //   console.log(findDuplicates([1, 2, 3, 4]));
  //   // []
  //   console.log(findDuplicates([1, 1, 1, 1]));

  //   function findSecondLargest(arr) {
  //     let max = arr[0];
  //     for (let i = 0; i < arr.length; i += 1) {
  //       if (max < arr[i]) {
  //         max = arr[i];
  //       }
  //     }

  //     for (let i = 0; i < arr.length; i += 1) {
  //       if (arr[i] === max) {
  //         arr.splice(i, 1);
  //         i -= 1;
  //       }
  //     }

  //     let secondMax = arr[0];
  //     for (const item of arr) {
  //       if (secondMax < item) {
  //         secondMax = item;
  //       }
  //     }
  //     return secondMax;
  //   }

  function findSecondLargest(arr) {
    let max = arr[0];
    let secondMax;

    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
      }
      if ((arr[i] > secondMax || secondMax === undefined) && arr[i] < max) {
        secondMax = arr[i];
      }
    }
    return secondMax;
  }

  console.log(findSecondLargest([10, 5, 8, 20, 15])); // 15

  console.log(findSecondLargest([1, 2, 3, 4, 5])); // 4

  console.log(findSecondLargest([-10, -5, -20])); // -10

  console.log(findSecondLargest([5, 5, 5, 4])); // 4

  console.log(findSecondLargest([-10, 0, -5]));
};
