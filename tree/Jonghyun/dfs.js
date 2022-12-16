function solution(maps) {
  const N = maps.length - 1;
  const M = maps[0].length - 1;
  const direction = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  let queue = [[0, 0, 1]];

  maps[0][0] = 0;

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();
    if (x == N && y == M) {
      return count;
    }

    for (let d of direction) {
      const next = [x + d[0], y + d[1], count + 1];
      if (maps[next[0]] && maps[next[0]][next[1]] && maps[next[0]][next[1]] === 1) {
        maps[next[0]][next[1]] = 0;

        queue.push(next);
      }
    }
  }

  return -1;
}
