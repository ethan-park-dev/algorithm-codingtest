import solution from '../../main/stack/06-14';

describe('solution', () => {
  test('기본 테스트 케이스 1', () => {
    const n = 8;
    const k = 2;
    const cmd = ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z'];
    const expected = 'OOOOXOOO';
    expect(solution(n, k, cmd)).toEqual(expected);
  });

  test('기본 테스트 케이스 2', () => {
    const n = 8;
    const k = 2;
    const cmd = [
      'D 2',
      'C',
      'U 3',
      'C',
      'D 4',
      'C',
      'U 2',
      'Z',
      'Z',
      'U 1',
      'C',
    ];
    const expected = 'OOXOXOOO';
    expect(solution(n, k, cmd)).toEqual(expected);
  });

  test('모든 행을 삭제 후 복구하는 경우', () => {
    const n = 5;
    const k = 0;
    const cmd = ['C', 'C', 'C', 'C', 'C', 'Z', 'Z', 'Z', 'Z', 'Z'];
    const expected = 'OOOOO';
    expect(solution(n, k, cmd)).toEqual(expected);
  });

  test('한 번의 삭제 후 바로 복구하는 경우', () => {
    const n = 6;
    const k = 3;
    const cmd = ['C', 'Z'];
    const expected = 'OOOOOO';
    expect(solution(n, k, cmd)).toEqual(expected);
  });
});
