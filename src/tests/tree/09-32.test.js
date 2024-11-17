import solution from '../../main/tree/09-32';

describe('길 찾기 게임', () => {
  test('예제 케이스 1', () => {
    const nodeinfo = [
      [5, 3],
      [11, 5],
      [13, 3],
      [3, 5],
      [6, 1],
      [1, 3],
      [8, 6],
      [7, 2],
      [2, 2],
    ];
    const result = [
      [7, 4, 6, 9, 1, 8, 5, 2, 3], // 전위 순회
      [9, 6, 5, 8, 1, 4, 3, 2, 7], // 후위 순회
    ];
    expect(solution(nodeinfo)).toEqual(result);
  });

  test('노드가 한 개만 있는 경우', () => {
    const nodeinfo = [[5, 3]];
    const result = [[1], [1]];
    expect(solution(nodeinfo)).toEqual(result);
  });

  test('왼쪽으로만 이어지는 트리', () => {
    const nodeinfo = [
      [5, 5],
      [4, 4],
      [3, 3],
      [2, 2],
      [1, 1],
    ];
    const result = [
      [1, 2, 3, 4, 5], // 전위 순회
      [5, 4, 3, 2, 1], // 후위 순회
    ];
    expect(solution(nodeinfo)).toEqual(result);
  });
});
