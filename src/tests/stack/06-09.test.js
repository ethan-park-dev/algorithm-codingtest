import solution from '../../main/stack/06-09';

describe('10진수를 2진수로 변환하는 테스트', () => {
  test('10을 2진수로 변환: 10 -> 1010', () => {
    expect(solution(10)).toBe('1010');
  });

  test('27을 2진수로 변환: 27 -> 11011', () => {
    expect(solution(27)).toBe('11011');
  });

  test('12345를 2진수로 변환: 12345 -> 11000000111001', () => {
    expect(solution(12345)).toBe('11000000111001');
  });

  test('0을 2진수로 변환: 0 -> ""', () => {
    expect(solution(0)).toBe('');
  });
});
