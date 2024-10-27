import solution from '../../main/array/05-5-03';

test('배열 [2, 1, 3, 4, 1]의 모든 쌍의 합을 정렬합니다', () => {
  expect(solution([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
});

test('배열 [5, 0, 2, 7]의 모든 쌍의 합을 정렬합니다', () => {
  expect(solution([5, 0, 2, 7])).toEqual([2, 5, 7, 9, 12]);
});

test('빈 배열을 입력하면 빈 배열을 반환합니다', () => {
  expect(solution([])).toEqual([]);
});

test('배열 [1, 1]은 중복된 합을 제거하고 반환합니다', () => {
  expect(solution([1, 1])).toEqual([2]);
});
