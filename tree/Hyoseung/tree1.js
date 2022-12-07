function solution(brown, yellow) {
    for (x = 1; x <= yellow; x++) {
        let y = yellow / x;

        if (x >= y) {
            let a = x * 2 + y * 2 + 4;
            if (brown === a) {
                return [x + 2, y + 2];
            }
        }
    }

    return answer;
}

// 노란색 카펫의 가로,세로를 (x,y) 라 가정하면 갈색 카펫의 수는 노란카펫을 둘러싸고있는 구조를 가지기에 모서리 4개를 따로 더하면 이와 같다 => (x*2 + y*2) + 4
// 가로가 세로보다 크거나 같아야하기에 for문을 통해 증가시키다 if문을 통해 갈색타일의 임시개수인 a를 설정하고 a가 입력된 brown과 일치하면 return 한다
