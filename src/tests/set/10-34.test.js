import solution from '../../main/set/10-34';

describe('폰켓몬 문제', () => {
  test('예제 1: [3, 1, 2, 3]', () => {
    expect(solution([3, 1, 2, 3])).toBe(2);
  });

  test('예제 2: [3, 3, 3, 2, 2, 4]', () => {
    expect(solution([3, 3, 3, 2, 2, 4])).toBe(3);
  });

  test('예제 3: [3, 3, 3, 2, 2, 2]', () => {
    expect(solution([3, 3, 3, 2, 2, 2])).toBe(2);
  });

  test('중복이 없는 경우', () => {
    expect(solution([1, 2, 3, 4])).toBe(2); // 선택 가능한 최대 수는 N/2
  });

  test('모든 종류를 선택 가능한 경우', () => {
    expect(solution([1, 1, 1, 2, 2, 3, 3])).toBe(3); // 종류는 3, 선택 가능한 수는 3
  });

  test('하나의 종류만 있는 경우', () => {
    expect(solution([1, 1, 1, 1, 1, 1, 1, 1])).toBe(1); // 하나의 종류만 선택 가능
  });
});
