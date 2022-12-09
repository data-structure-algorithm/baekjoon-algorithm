//프로그래머스 최소직사각형

function solution(sizes) { 
    let a = [];
    let b = [];
    
    for(let i=0; i < sizes.length; i++){
        a.push(sizes[i][0],sizes[i][1]);
    }
    for(let j=0; j < sizes.length; j++){
        if(sizes[j][0] <= sizes[j][1]){
            b.push(sizes[j][0])
        }else{
            b.push(sizes[j][1])
        }
    }
    
    return Math.max(...a) * Math.max(...b)
}

//가로세로 구분없이 제일 큰 수를 먼저 도출하여 그 수를 그냥 가로라고 여기고 나머지 sizes배열안에서 배열의 [a,b] 두 수중 작은수들을 전부 모아 그중에 가장 큰 수를 세로로 설정
