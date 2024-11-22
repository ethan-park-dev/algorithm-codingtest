import solution from '../../main/graph/11-40';

describe('다익스트라 알고리즘', () => {
  test('예제 1', () => {
    const graph = { A: { B: 9, C: 3 }, B: { A: 5 }, C: { B: 1 } };
    const start = 'A';
    const result = solution(graph, start);
    expect(result).toEqual([
      { A: 0, B: 4, C: 3 },
      { A: ['A'], B: ['A', 'C', 'B'], C: ['A', 'C'] },
    ]);
  });

  test('예제 2', () => {
    const graph = { A: { B: 1 }, B: { C: 5 }, C: { D: 1 }, D: {} };
    const start = 'A';
    const result = solution(graph, start);
    expect(result).toEqual([
      { A: 0, B: 1, C: 6, D: 7 },
      { A: ['A'], B: ['A', 'B'], C: ['A', 'B', 'C'], D: ['A', 'B', 'C', 'D'] },
    ]);
  });
});
