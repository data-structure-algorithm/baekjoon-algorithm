function solution(k, dungeons) {
  let answer = 0;
  const permutations = getPermutations(dungeons,dungeons.length)
  
  for( let i =0; i <permutations.length;i++){
      const dungeon = permutations[i]
      
      let count =0;
      let fatigue =k;
      for (let j =0; j<dungeon.length;j++){
          const target =dungeon[j]
          if(fatigue>=target[0]){
              count++
              fatigue -=target[1]
          }
      }
      answer = Math.max(answer,count)
  }
  return answer
}

const getPermutations = (arr, num) => {
if (num === 1) return arr.map((v) => [v]);

const results = [];
arr.forEach((fixed, index, origin) => {
  const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
  const permutaions = getPermutations(rest, num - 1);
  const attached = permutaions.map((v) => [fixed, ...v]);
  results.push(...attached);
});

return results;
};