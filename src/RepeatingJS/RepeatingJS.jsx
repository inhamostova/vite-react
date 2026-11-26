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
  //   function findSecondLargest(arr) {
  //     let max = arr[0];
  //     let secondMax;
  //     for (let i = 1; i < arr.length; i += 1) {
  //       if (arr[i] > max) {
  //         secondMax = max;
  //         max = arr[i];
  //       }
  //       if ((arr[i] > secondMax || secondMax === undefined) && arr[i] < max) {
  //         secondMax = arr[i];
  //       }
  //     }
  //     return secondMax;
  //   }
  //   console.log(findSecondLargest([10, 5, 8, 20, 15])); // 15
  //   console.log(findSecondLargest([1, 2, 3, 4, 5])); // 4
  //   console.log(findSecondLargest([-10, -5, -20])); // -10
  //   console.log(findSecondLargest([5, 5, 5, 4])); // 4
  //   console.log(findSecondLargest([-10, 0, -5]));
  //   function countOccurrences(arr) {
  //     const obj = {};
  //     for (let i = 0; i < arr.length; i += 1) {
  //       obj[arr[i]] = (obj[arr[i]] ?? 0) + 1;
  //     }
  //     return obj;
  //   }
  //   countOccurrences([1, 2, 2, 3, 3, 3]);
  //   // { 1: 1, 2: 2, 3: 3 }
  //   countOccurrences(["a", "b", "a", "c", "b", "a"]);
  //   // { a: 3, b: 2, c: 1 }
  //   countOccurrences([5, 5, 5, 5]);
  //   // { 5: 4 }
  //   countOccurrences([]);
  //   function firstNonRepeatingChar(str) {
  //     const obj = {};
  //     for (let i = 0; i < str.length; i += 1) {
  //       obj[str[i]] = (obj[str[i]] ?? 0) + 1;
  //     }
  //     for (const key in obj) {
  //       if (obj[key] === 1) {
  //         return key;
  //       }
  //     }
  //     return null;
  //   }
  //   console.log(firstNonRepeatingChar("aabbcdd")); // "c"
  //   console.log(firstNonRepeatingChar("hello")); // "h"
  //   console.log(firstNonRepeatingChar("aabbcc")); // null
  //   console.log(firstNonRepeatingChar("swiss")); // "w"
  //   function areAnagrams(str1, str2) {
  //     const obj1 = {};
  //     const obj2 = {};
  //     if (str1.length !== str2.length) {
  //       return false;
  //     }
  //     for (let i = 0; i < str1.length; i += 1) {
  //       obj1[str1[i]] = (obj1[str1[i]] ?? 0) + 1;
  //       obj2[str2[i]] = (obj2[str2[i]] ?? 0) + 1;
  //     }
  //     for (const key in obj1) {
  //       if (obj2[key] === obj1[key]) {
  //         continue;
  //       } else {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }
  //   console.log(areAnagrams("listen", "silent")); // true
  //   console.log(areAnagrams("hello", "world")); // false
  //   console.log(areAnagrams("anagram", "nagaram")); // true
  //   console.log(areAnagrams("rat", "car")); // false
  //   console.log(areAnagrams("ab", "abc")); // false
  //   console.log(areAnagrams("aab", "abb")); // false
  //   console.log(areAnagrams("", ""));
  //   function findMissingNumber(arr) {
  //     const sum = (arr.length * (arr.length + 1)) / 2;
  //     const total = arr.reduce((acc, item) => acc + item, 0);
  //     return sum - total;
  //   }
  //   console.log(findMissingNumber([3, 0, 1])); // 2
  //   console.log(findMissingNumber([0, 1])); // 2
  //   console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
  //   console.log(findMissingNumber([0])); // 1
  //   function twoSum(arr, target) {
  //     // for (let i = 0; i < arr.length; i += 1) {
  //     //   for (let j = i + 1; j < arr.length; j += 1) {
  //     //     if (arr[i] + arr[j] === target) {
  //     //       return [i, j];
  //     //     }
  //     //   }
  //     // }
  //     const map = new Map();
  //     for (let i = 0; i < arr.length; i += 1) {
  //       if (map.has(target - arr[i])) {
  //         return [map.get(target - arr[i]), i];
  //       }
  //       map.set(arr[i], i);
  //     }
  //   }
  //   console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
  //   console.log(twoSum([3, 2, 4], 6)); // [1, 2]
  //   console.log(twoSum([3, 3], 6)); // [0, 1]
  //   console.log(twoSum([4, 1, 8, 3], 7)); //[0,3]
  //   console.log(twoSum([1, 10, 3, 7, 5], 15));
  //   function groupAnagrams(arr) {
  //     const map = new Map();
  //     for (let i = 0; i < arr.length; i += 1) {
  //       const sortedWord = arr[i]
  //         .split("")
  //         .sort((a, b) => a.localeCompare(b))
  //         .join("");
  //       if (map.has(sortedWord)) {
  //         map.get(sortedWord).push(arr[i]);
  //         continue;
  //       }
  //       map.set(sortedWord, [arr[i]]);
  //     }
  //     return [...map.values()];
  //   }
  //   console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
  // [
  //   ["eat", "tea", "ate"],
  //   ["tan", "nat"],
  //   ["bat"]
  // ]
  //   function longestConsecutive(arr) {
  //     if (arr.length === 0) {
  //       return 0;
  //     }
  //     let currentLength = 1;
  //     let maxLength = 1;
  //     const sortedArr = [...arr].sort((a, b) => a - b);
  //     for (let i = 1; i < sortedArr.length; i += 1) {
  //       if (sortedArr[i] === sortedArr[i - 1] + 1) {
  //         currentLength += 1;
  //       } else if (sortedArr[i] === sortedArr[i - 1]) {
  //         continue;
  //       } else {
  //         currentLength = 1;
  //       }
  //       maxLength = maxLength < currentLength ? currentLength : maxLength;
  //     }
  //     return maxLength;
  //   }
  //   console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
  //   // 4
  //   // Послідовність: 1, 2, 3, 4
  //   console.log(longestConsecutive([1, 2, 3, 10, 11, 12, 13]));
  //   console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
  //   // 9
  //   // Послідовність: 0, 1, 2, 3, 4, 5, 6, 7, 8
  //   console.log(longestConsecutive([1, 2, 0, 1]));
  //   // 3
  //   // Послідовність: 0, 1, 2

  //   function moveZeros(arr) {
  //     const map = new Map();

  //     for (let i = 0; i < arr.length; i += 1) {
  //       if (map.has(0) && arr[i] === 0) {
  //         map.get(0).push(arr[i]);
  //       } else if (map.has("other") && arr[i] !== 0) {
  //         map.get("other").push(arr[i]);
  //       } else {
  //         map.set(arr[i] === 0 ? 0 : "other", [arr[i]]);
  //       }
  //     }

  //     return [...(map.get("other") ?? []), ...(map.get(0) ?? [])];
  //   }

  //   function moveZeros(arr) {
  //     const arr1 = [];
  //     const arr2 = [];

  //     for (const num of arr) {
  //       num === 0 ? arr1.push(num) : arr2.push(num);
  //     }
  //     return [...arr2, ...arr1];
  //   }

  //   function moveZeros(arr) {
  //     let j = 0;
  //     for (let i = 0; i < arr.length; i += 1) {
  //       if (arr[i] !== 0) {
  //         arr[j] = arr[i];
  //         j += 1;
  //       }
  //     }
  //     for (let i = j; i < arr.length; i += 1) {
  //       arr[i] = 0;
  //     }
  //     return arr;
  //   }

  //   console.log(moveZeros([0, 1, 0, 3, 12]));
  //   // [1, 3, 12, 0, 0]

  //   console.log(moveZeros([0, 0, 1]));
  //   // [1, 0, 0]

  //   console.log(moveZeros([1, 2, 3]));
  //   // [1, 2, 3]
  //   console.log(moveZeros([0, 0, 0]));
  //   // [0, 0, 0]

  //   function isPalindrome(str) {
  //     if (str.length === 0) return true;
  //     const newStr = str.toLowerCase().split("").reverse().join("");
  //     return newStr === str.toLowerCase();
  //   }

  //   function isPalindrome(str) {
  //     const normalizedStr = str.toLowerCase();
  //     for (
  //       let left = 0, right = str.length - 1;
  //       left <= right;
  //       left += 1, right -= 1
  //     ) {
  //       if (
  //         normalizedStr.toLowerCase()[left] !== normalizedStr.toLowerCase()[right]
  //       ) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }

  //   console.log(isPalindrome("madam")); // true
  //   console.log(isPalindrome("racecar")); // true
  //   console.log(isPalindrome("hello")); // false
  //   console.log(isPalindrome("level")); // true
  //   console.log(isPalindrome("LeVvel"));
  //   console.log(isPalindrome(""));

  //   function intersection(arr1, arr2) {
  //     const set = new Set(arr1);
  //     const result = new Set();

  //     for (let i = 0; i < arr2.length; i += 1) {
  //       if (set.has(arr2[i])) {
  //         result.add(arr2[i]);
  //       }
  //     }
  //     return [...result];
  //   }

  //   console.log(intersection([1, 2, 2, 1], [2, 2]));
  //   // [2]

  //   console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
  //   // [9, 4]

  //   console.log(intersection([1, 2, 3], [4, 5, 6]));
  //   // []

  //   function sameFrequency(num1, num2) {
  //     const map1 = new Map();
  //     const map2 = new Map();
  //     const str1 = String(num1);
  //     const str2 = String(num2);

  //     if (str1.length !== str2.length) return false;

  //     for (let i = 0; i < str1.length; i += 1) {
  //       if (map1.has(str1[i])) {
  //         map1.set(str1[i], map1.get(str1[i]) + 1);
  //       } else {
  //         map1.set(str1[i], 1);
  //       }
  //       if (map2.has(str2[i])) {
  //         map2.set(str2[i], map2.get(str2[i]) + 1);
  //       } else {
  //         map2.set(str2[i], 1);
  //       }
  //     }

  //     for (let i = 0; i < str1.length; i += 1) {
  //       if (!map2.has(str1[i]) || map2.get(str1[i]) !== map1.get(str1[i])) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }
  //   function sameFrequency(num1, num2) {
  //     const map = new Map();
  //     const str1 = String(num1);
  //     const str2 = String(num2);

  //     if (str1.length !== str2.length) return false;

  //     for (let i = 0; i < str1.length; i += 1) {
  //       if (map.has(str1[i])) {
  //         map.set(str1[i], map.get(str1[i]) + 1);
  //       } else {
  //         map.set(str1[i], 1);
  //       }
  //     }

  //     for (let i = 0; i < str2.length; i += 1) {
  //       if (!map.has(str2[i]) || map.get(str2[i]) === 0) {
  //         return false;
  //       }
  //       map.set(str2[i], map.get(str2[i]) - 1);
  //     }

  //     return true;
  //   }

  //   console.log(sameFrequency(182, 281)); // true
  //   console.log(sameFrequency(3589578, 5879385)); // true
  //   console.log(sameFrequency(34, 14)); // false
  //   console.log(sameFrequency(22, 222)); // false

  function isIsomorphic(s, t) {
    const map1 = new Map();
    const map2 = new Map();

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i += 1) {
      if (map1.has(s[i]) && map1.get(s[i]) !== t[i]) {
        return false;
      } else {
        map1.set(s[i], t[i]);
      }

      if (map2.has(t[i]) && map2.get(t[i]) !== s[i]) {
        return false;
      } else {
        map2.set(t[i], s[i]);
      }
    }

    return true;
  }

  console.log(isIsomorphic("ab", "cc")); // false
  console.log(isIsomorphic("egg", "add")); // true
  console.log(isIsomorphic("foo", "bar")); // false
  console.log(isIsomorphic("paper", "title")); // true
  console.log(isIsomorphic("badc", "baba")); // false
};
