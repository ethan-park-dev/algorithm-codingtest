import solution from '../../main/hash/08-18';

describe('두 개의 수로 특정 값 만들기', () => {
  test('기본 테스트 케이스 1', () => {
    const arr = [1, 2, 3, 4, 8];
    const target = 6;
    const expected = true;
    expect(solution(arr, target)).toEqual(expected);
  });

  test('기본 테스트 케이스 2', () => {
    const arr = [2, 3, 5, 9];
    const target = 10;
    const expected = false;
    expect(solution(arr, target)).toEqual(expected);
  });

  test('합이 존재하는 경우', () => {
    const arr = [10, 15, 3, 7];
    const target = 17;
    const expected = true;
    expect(solution(arr, target)).toEqual(expected);
  });

  test('합이 존재하지 않는 경우', () => {
    const arr = [1, 5, 9, 12];
    const target = 20;
    const expected = false;
    expect(solution(arr, target)).toEqual(expected);
  });

  test('모든 원소의 합이 타겟과 일치하지 않는 경우', () => {
    const arr = [4, 6, 8, 11];
    const target = 3;
    const expected = false;
    expect(solution(arr, target)).toEqual(expected);
  });

  test('두 원소의 합이 타겟과 일치하는 경우', () => {
    const arr = [1, 2, 3, 9, 14];
    const target = 5;
    const expected = true;
    expect(solution(arr, target)).toEqual(expected);
  });

  test('큰 배열 테스트', () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i + 1);
    const target = 19999;
    const expected = true;
    expect(solution(arr, target)).toEqual(expected);
  });
});
