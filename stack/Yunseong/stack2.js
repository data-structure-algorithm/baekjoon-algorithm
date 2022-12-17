function solution(arr)
{
    
    let same = [];    
    
    
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] != arr[i + 1]) {
                    same.push(arr[i]);
            }
    }

    return same;
}
