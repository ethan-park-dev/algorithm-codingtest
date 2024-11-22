import solution from '../../main/graph/11-41';

describe('벨만-포드 알고리즘', () => {
  test('예제 1', () => {
    const graph = [
      [
        [1, 4],
        [2, 3],
        [4, -6],
      ],
      [[3, 5]],
      [[1, 2]],
      [
        [0, 7],
        [2, 4],
      ],
      [[2, 2]],
    ];
    const source = 0;
    expect(solution(graph, source)).toEqual([
      [0, -2, -4, 3, -6],
      [null, 2, 4, 1, 0],
    ]);
  });

  test('예제 2 (음의 가중치 순환)', () => {
    const graph = [
      [
        [1, 5],
        [2, -1],
      ],
      [[2, 2]],
      [[3, -2]],
      [
        [0, 2],
        [1, 6],
      ],
    ];
    const source = 0;
    expect(solution(graph, source)).toEqual([-1]);
  });
});
