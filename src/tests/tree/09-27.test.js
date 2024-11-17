import solution from '../../main/tree/09-27';

describe('이진 탐색 트리 구현', () => {
  test('예제 케이스 1', () => {
    const list = [5, 3, 8, 4, 2, 1, 7, 10];
    const searchList = [1, 2, 5, 6];
    const result = [true, true, true, false];
    expect(solution(list, searchList)).toEqual(result);
  });

  test('예제 케이스 2', () => {
    const list = [1, 3, 5, 7, 9];
    const searchList = [2, 4, 6, 8, 10];
    const result = [false, false, false, false, false];
    expect(solution(list, searchList)).toEqual(result);
  });

  test('중복된 값이 포함된 경우', () => {
    const list = [5, 3, 8, 5, 2, 3];
    const searchList = [3, 5, 9];
    const result = [true, true, false];
    expect(solution(list, searchList)).toEqual(result);
  });

  test('트리가 비어 있는 경우', () => {
    const list = [];
    const searchList = [1, 2, 3];
    const result = [false, false, false];
    expect(solution(list, searchList)).toEqual(result);
  });
});
