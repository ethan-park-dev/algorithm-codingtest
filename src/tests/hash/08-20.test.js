import solution from '../../main/hash/08-20';

describe('완주하지 못한 선수', () => {
  test('기본 테스트 케이스 1', () => {
    const participant = ['leo', 'kiki', 'eden'];
    const completion = ['eden', 'kiki'];
    const expected = 'leo';
    expect(solution(participant, completion)).toEqual(expected);
  });

  test('기본 테스트 케이스 2', () => {
    const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
    const completion = ['josipa', 'filipa', 'marina', 'nikola'];
    const expected = 'vinko';
    expect(solution(participant, completion)).toEqual(expected);
  });

  test('동명이인이 있는 경우', () => {
    const participant = ['mislav', 'stanko', 'mislav', 'ana'];
    const completion = ['stanko', 'ana', 'mislav'];
    const expected = 'mislav';
    expect(solution(participant, completion)).toEqual(expected);
  });
});
