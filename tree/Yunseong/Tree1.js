function solution(sizes) {
  let arr = [0, 0];
  for (let i = 0; i < sizes.length; i++) {
    let [width, height] = sizes[i].sort((width, height) => height - width);

    if (width > arr[0]) {
      arr[0] = width;
    }
    if (height > arr[1]) arr[1] = height;
  }
  return arr[0] * arr[1];
}
