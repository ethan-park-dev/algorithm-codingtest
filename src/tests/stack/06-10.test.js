import solution from '../../main/stack/06-10';

describe('solution', () => {
  test('기본 테스트 케이스 1', () => {
    const s = '[](){}';
    const expected = 3;
    expect(solution(s)).toEqual(expected);
  });

  test('기본 테스트 케이스 2', () => {
    const s = '}]()[{';
    const expected = 2;
    expect(solution(s)).toEqual(expected);
  });

  test('기본 테스트 케이스 3', () => {
    const s = '[)(]';
    const expected = 0;
    expect(solution(s)).toEqual(expected);
  });

  test('기본 테스트 케이스 4', () => {
    const s = '}}}';
    const expected = 0;
    expect(solution(s)).toEqual(expected);
  });
});
