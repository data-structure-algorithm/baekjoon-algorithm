function solution(maps) {
  const row = maps.length - 1;
  const col = maps[0].length - 1;

  const queue = [[0, 0, 1]];
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  while (queue.length) {
    let [y, x, count] = queue.shift();

    if (y === row && x === col) return count;

    for (let i = 0; i < 4; i++) {
      const [dy, dx] = directions[i];
      const nextY = dy + y;
      const nextX = dx + x;

      if (isRoad(nextY, nextX, row, col)) continue;

      if (maps[nextY][nextX] === 0) continue;
      maps[nextY][nextX] = 0;

      queue.push([nextY, nextX, count + 1]);
    }
  }
  return -1;
}

const isRoad = (nextY, nextX, row, col) => {
  return nextY < 0 || nextX < 0 || nextY > row || nextX > col;
};
