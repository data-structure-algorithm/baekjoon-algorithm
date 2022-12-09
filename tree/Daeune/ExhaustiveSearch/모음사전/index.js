function solution(word) {
  var answer = 0;
  let str =['A','E','I','O','U']
  let wordArr = word.split('')
  
  for(let i =0; i< wordArr.length;i++){
      const target = str.findIndex((str)=> str === wordArr[i])
      answer +=getNum(i) * target +1
  }
  
  
  return answer;
}
  
function getNum(idx){
  let sum =0;
  let count=0;
  while(count<= 4-idx){
      sum+= (5 ** count)
      count++
  }
  return sum
}

