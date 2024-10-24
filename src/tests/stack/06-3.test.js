import solution from '../../main/stack/06-3';

describe('괄호 짝 맞추기 테스트', () => {
  test('올바른 괄호 쌍: () -> true', () => {
    expect(solution('()')).toBe(true);
  });

  test('올바른 중첩 괄호: (()) -> true', () => {
    expect(solution('(())')).toBe(true);
  });

  test('올바르지 않은 괄호 쌍: (() -> false', () => {
    expect(solution('(()')).toBe(false);
  });

  test('올바르지 않은 괄호 쌍: )( -> false', () => {
    expect(solution(')(')).toBe(false);
  });

  test('여러 괄호가 맞지 않을 때: ()()) -> false', () => {
    expect(solution('()())')).toBe(false);
  });

  test('빈 문자열: "" -> true', () => {
    expect(solution('')).toBe(true);
  });
});
