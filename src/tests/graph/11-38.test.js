import solution from '../../main/graph/11-38';

describe('깊이 우선 탐색 (DFS)', () => {
  test('예제 1', () => {
    const graph = [
      ['A', 'B'],
      ['B', 'C'],
      ['C', 'D'],
      ['D', 'E'],
    ];
    const start = 'A';
    expect(solution(graph, start)).toEqual(['A', 'B', 'C', 'D', 'E']);
  });

  test('예제 2', () => {
    const graph = [
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'D'],
      ['B', 'E'],
      ['C', 'F'],
      ['E', 'F'],
    ];
    const start = 'A';
    expect(solution(graph, start)).toEqual(['A', 'B', 'D', 'E', 'F', 'C']);
  });
});
