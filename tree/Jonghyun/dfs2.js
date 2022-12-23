// function solution(numbers, target) {
//     if(numbers.reduce((a,b) => a + b, 0) === target) return 1

//     var answer = [];
//     // 4C0 4C1 4C2 4C3 = 경우의 수
//     // 1. 모든 경우의 수를 만든다
//     // 2. 모든 것을 다 곱한다.
//     // 3. 답에 맞는 개수만 센다.
//     let count = 0;
//     let positiveArray = new Array(numbers.length).fill().map((v,i) => i)
//     let result = [];
//     for(let i = 0; i < numbers.length; i++){
//         answer.push(getCombinations(positiveArray, i))
//     }

//     answer.flat().forEach(combination =>{
//         result.push(numbers
//                     .map((number, index) => combination.includes(index) ? number * (-1) : number)
//                     .reduce((a,b) => a + b, 0))
//     })

//     return result.filter(num => num === target).length;
// }

//     const getCombinations = (arr, num) => {
//         const results = [];
//         // nC1 이며, 1이면 의미 없기때문에 바로 반환한다.
//         if (num === 1) return arr.map(v => [v]);

//         arr.forEach((fixed, index, origin) => {
//         // 조합에서는 값 순서에 상관없이 중복이 되면 안되기 때문에 현재값 이후의 배열들만 추출한다.
//         const rest = origin.slice(index + 1);

//         // 나머지 배열을 기준으로 다시 조합을 실시한다.
//         // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
//         const combinations = getCombinations(rest, num - 1);

//         // 기준값(fixed)에 돌아온 조합(combinations)을 붙인다.
//         const attached = combinations.map((v,i) => [fixed, ...v]);

//         // 붙인 값을 결과 값에 넣어준다.
//         results.push(...attached);
//     });

//     return results;
// }

function solution(numbers, target) {
  let answer = 0;

  const getAnswer = (x, value) => {
    if (x < numbers.length) {
      getAnswer(x + 1, value + numbers[x]);
      getAnswer(x + 1, value - numbers[x]);
    } else {
      if (value === target) answer++;
    }
  };

  getAnswer(0, 0);
  return answer;
}
