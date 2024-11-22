import solution from '../../main/graph/11-42';
describe('게임 맵 최단 거리', () => {
  test('기본 테스트 1', () => {
    const maps = [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ];
    expect(solution(maps)).toBe(11);
  });

  test('기본 테스트 2', () => {
    const maps = [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 0],
    ];
    expect(solution(maps)).toBe(-1);
  });
});
