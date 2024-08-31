const findSum = function(array) {
  let sum = 0
      for (let i=0;i< array.length;i++){
          sum = sum+array[i];
      }
      return sum
};

const findFrequency = function(array) {
  let counts={};
        let minCount = Infinity;
        let maxCount =  0;
        let mostFrequent, leastFrequent;
        for (const item of array){
            counts[item]= (counts[item] || 0) +1; 
            minCount = Math.min(counts[item], minCount); 
            maxCount = Math.max(counts[item], maxCount);
        }
        for(const item in counts){
            if (counts[item] === minCount){
                leastFrequent = item;
            }
            if (counts[item] === maxCount){mostFrequent = item;
            }
          }
            return `Most: ${mostFrequent} Least: ${leastFrequent}`;
};

const isPalindrome = function(str) {
  const strArray = str.split("");
      const reverseArray= strArray.reverse();
      const reversedWord= reverseArray.join("");
      const lowerReversed = reversedWord.toLowerCase();
      return lowerReversed === str.toLowerCase();
};

const largestPair = function(array) {
 const sums = [];
      let largestSum = 0;
      for (i = 0; i < array.length; i++){
          const sum = array[i] + array[i+1];
          sums.push(sum)
          if (sum > largestSum){
              largestSum = sum;
          }
      } return largestSum
};

const removeParenth = function(str) {
   let stringArray = str.split("");
       const openParenth = stringArray.indexOf('(') 
       let removed = stringArray.splice(openParenth, 1);
       const closedParenth = stringArray.indexOf(')');
       removed = stringArray.splice(closedParenth, 1);
       stringArray = stringArray.join("")
       return stringArray
};

const scoreScrabble = function(str) {
  const values = []
      const stringArray = str.split("");
      stringArray.forEach(item => 
          {switch(item)
          {case "a":
          case "e":
          case "i":
          case "o":
          case "u":
          case "l":
          case "n":
          case "r":
          case "s":
          case "t":
              values.push(1)
              break;
          case "d":
          case "g":
              values.push(2)
              break;
          case "b":
          case "c":
          case "m":
          case "p":
              values.push(3)
              break;
          case "f":
          case "h":
          case "v":
          case "w":
          case "y":
              values.push(4)
              break;
          case "k":
              values.push(5)
              break;
          case "j":
          case "x":
              values.push(8)
              break;
          case "q":
          case "z":
              values.push(10)
              break;
          default: 
              break;}
          } 
                  );
         const score = values.reduce((acc, current) => acc + current, 0)
         return score;
      
  
};
