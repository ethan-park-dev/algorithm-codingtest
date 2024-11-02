import solution from '../../main/stack/06-11';

describe('solution', () => {
  test('기본 테스트 케이스 1', () => {
    const s = 'baabaa';
    const expected = 1;
    expect(solution(s)).toEqual(expected);
  });

  test('기본 테스트 케이스 2', () => {
    const s = 'cdcd';
    const expected = 0;
    expect(solution(s)).toEqual(expected);
  });

  test('중복된 문자들이 모두 제거되는 경우', () => {
    const s = 'aabbccddeeff';
    const expected = 1;
    expect(solution(s)).toEqual(expected);
  });

  test('문자열 길이가 홀수로 남는 경우', () => {
    const s = 'abc';
    const expected = 0;
    expect(solution(s)).toEqual(expected);
  });

  test('모두 같은 문자로 이루어진 경우', () => {
    const s = 'aaaa';
    const expected = 1;
    expect(solution(s)).toEqual(expected);
  });

  test('중간에 제거 후 일부 남는 경우', () => {
    const s = 'abccba';
    const expected = 1;
    expect(solution(s)).toEqual(expected);
  });

  test('하나의 문자만 있는 경우', () => {
    const s = 'a';
    const expected = 0;
    expect(solution(s)).toEqual(expected);
  });
});
