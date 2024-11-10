import solution from '../../main/hash/08-19';

describe('문자열 해싱을 이용한 검색 함수 만들기', () => {
  test('기본 테스트 케이스 1', () => {
    const stringList = ['apple', 'banana', 'cherry'];
    const queryList = ['banana', 'kiwi', 'melon', 'apple'];
    const expected = [true, false, false, true];
    expect(solution(stringList, queryList)).toEqual(expected);
  });

  test('빈 문자열 리스트와 쿼리 리스트', () => {
    const stringList = [];
    const queryList = ['apple', 'banana'];
    const expected = [false, false];
    expect(solution(stringList, queryList)).toEqual(expected);
  });

  test('모든 문자열이 포함된 경우', () => {
    const stringList = ['apple', 'banana', 'cherry'];
    const queryList = ['apple', 'banana', 'cherry'];
    const expected = [true, true, true];
    expect(solution(stringList, queryList)).toEqual(expected);
  });

  test('모든 문자열이 포함되지 않은 경우', () => {
    const stringList = ['apple', 'banana', 'cherry'];
    const queryList = ['kiwi', 'mango', 'grape'];
    const expected = [false, false, false];
    expect(solution(stringList, queryList)).toEqual(expected);
  });

  test('해싱 충돌이 없는 경우', () => {
    const stringList = ['a', 'b', 'c'];
    const queryList = ['a', 'd', 'b'];
    const expected = [true, false, true];
    expect(solution(stringList, queryList)).toEqual(expected);
  });
});
