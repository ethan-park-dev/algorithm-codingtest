import solution from '../../main/array/05-4-01';

test('음수가 포함된 배열을 정렬', () => {
  expect(solution([1, -5, 2, 4, 3])).toEqual([-5, 1, 2, 3, 4]);
});

test('중복된 숫자가 있는 배열을 정렬', () => {
  expect(solution([2, 1, 1, 3, 2, 5, 4])).toEqual([1, 1, 2, 2, 3, 4, 5]);
});

test('이미 정렬된 배열을 정렬', () => {
  expect(solution([1, 6, 7])).toEqual([1, 6, 7]);
});
