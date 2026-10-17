export function analyzeArr(numArr) {
  const length = numArr.length;
  const min = numArr.reduce((min, cur) => 
    cur < min ? cur : min);
  const max = numArr.reduce((max, cur) => 
    cur > max ? cur : max);
  const average = numArr.reduce((sum, cur) =>
    sum + cur, 0) / numArr.length;

  return {
    average,
    min,
    max,
    length,
  };
}