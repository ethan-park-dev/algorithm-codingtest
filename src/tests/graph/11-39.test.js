import solution from '../../main/graph/11-39';

describe('단방향 너비 우선 탐색 (BFS)', () => {
  test('예제 1', () => {
    const graph = [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
      [4, 8],
      [5, 8],
      [6, 9],
      [7, 9],
    ];
    const start = 1;
    expect(solution(graph, start)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('예제 2', () => {
    const graph = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ];
    const start = 1;
    expect(solution(graph, start)).toEqual([1, 2, 3, 4, 5]);
  });
});
