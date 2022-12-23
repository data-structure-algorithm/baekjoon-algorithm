function solution(numbers) {
  var count = 0;
  let arr = numbers.split("");
  let test = [];

  function isSosu(num) {
    // 해당 숫자가 소수인지 아닌지를 판별해주는 함수
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

  function re(arr, selectnum) {
    // 순열을 통해 모든 경우의 수를 나열
    let result = [];
    if (selectnum == 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const combinations = re(rest, selectnum - 1);
      const attached = combinations.map((el) => [fixed, ...el]);

      result.push(...attached);
    });
    return result;
  }

  numbers = numbers.split("");
  let array = [];
  for (let i = 1; i <= numbers.length; i++) {
    let final = re(numbers, i);
    array.push(...final);
  }
  //array = [ [ '1' ], [ '7' ], [ '1', '7' ], [ '7', '1' ] ]
  array.map((item) => {
    test.push(Number(item.join("")));
  }); //Number를 통해 '01' => 1로 변경
  let set = new Set(test); // 중복되는 값 제거
  let NewTest = [...set];

  for (let i = 0; i < NewTest.length; i++) {
    if (isSosu(NewTest[i])) {
      count++;
    }
  }

  return count;
}
