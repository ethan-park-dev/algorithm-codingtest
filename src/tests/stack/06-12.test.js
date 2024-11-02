import solution from '../../main/stack/06-12';

describe('solution', () => {
  test('기본 테스트 케이스 1', () => {
    const prices = [1, 2, 3, 2, 3];
    const expected = [4, 3, 1, 1, 0];
    expect(solution(prices)).toEqual(expected);
  });

  test('모든 주가가 상승하는 경우', () => {
    const prices = [1, 2, 3, 4, 5];
    const expected = [4, 3, 2, 1, 0];
    expect(solution(prices)).toEqual(expected);
  });

  test('모든 주가가 동일한 경우', () => {
    const prices = [3, 3, 3, 3, 3];
    const expected = [4, 3, 2, 1, 0];
    expect(solution(prices)).toEqual(expected);
  });

  test('주가가 급락하는 경우', () => {
    const prices = [5, 4, 3, 2, 1];
    const expected = [1, 1, 1, 1, 0];
    expect(solution(prices)).toEqual(expected);
  });

  test('주가가 중간에 떨어졌다가 다시 오르는 경우', () => {
    const prices = [1, 3, 2, 3, 1];
    const expected = [4, 1, 2, 1, 0];
    expect(solution(prices)).toEqual(expected);
  });
});
