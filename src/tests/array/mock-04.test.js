import solution from '../../main/array/mock-04';

test('입출력 예 #1: [1,2,3,4,5] -> [1]', () => {
  expect(solution([1, 2, 3, 4, 5])).toEqual([1]);
});

test('입출력 예 #2: [1,3,2,4,2] -> [1,2,3]', () => {
  expect(solution([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
});

test('모든 수포자가 같은 점수일 때: [2, 1, 2, 3, 2, 4, 2, 5] -> [2]', () => {
  expect(solution([2, 1, 2, 3, 2, 4, 2, 5])).toEqual([2]);
});

test('수포자 3이 제일 많이 맞힌 경우: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] -> [3]', () => {
  expect(solution([3, 3, 1, 1, 2, 2, 4, 4, 5, 5])).toEqual([3]);
});
