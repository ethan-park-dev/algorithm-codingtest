import solution from '../../main/tree/09-30';

describe('미로 탈출', () => {
  test('예제 케이스 1', () => {
    const maps = ['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE'];
    const result = 16;
    expect(solution(maps)).toBe(result);
  });

  test('예제 케이스 2', () => {
    const maps = ['LOOXS', 'OOOOX', 'OOOOO', 'OOOOO', 'EOOOO'];
    const result = -1;
    expect(solution(maps)).toBe(result);
  });
});
