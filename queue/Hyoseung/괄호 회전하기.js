function solution(s) {
    let answer = 0;
    let arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (check(arr)) answer++;
        arr.push(arr.shift());
    }
    return answer;
}

function check(arr) {
    const x = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "{" || arr[i] === "[" || arr[i] === "(") x.push(arr[i]);
        else if (arr[i] === ")" && x[x.length - 1] === "(") x.pop();
        else if (arr[i] === "]" && x[x.length - 1] === "[") x.pop();
        else if (arr[i] === "}" && x[x.length - 1] === "{") x.pop();
        else return false;
    }
    if (x.length === 0) return true;
}
