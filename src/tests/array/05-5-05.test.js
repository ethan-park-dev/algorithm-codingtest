import solution from '../../main/array/05-5-05';
describe('문제 05 행렬의 곱셈', () => {
  test('3 x 2 행렬과 2 x 2 행렬 곱셈', () => {
    const arr1 = [
      [1, 4],
      [3, 2],
      [4, 1],
    ];
    const arr2 = [
      [3, 3],
      [3, 3],
    ];
    const expected = [
      [15, 15],
      [15, 15],
      [15, 15],
    ];
    expect(solution(arr1, arr2)).toEqual(expected);
  });

  test('3 x 3 행렬과 3 x 3 행렬 곱셈', () => {
    const arr1 = [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ];
    const arr2 = [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ];
    const expected = [
      [22, 22, 11],
      [36, 28, 18],
      [29, 20, 14],
    ];
    expect(solution(arr1, arr2)).toEqual(expected);
  });
});
