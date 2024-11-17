import solution from '../../main/tree/09-26';

describe('트리 순회', () => {
  test('예제 케이스 1', () => {
    const nodes = [1, 2, 3, 4, 5, 6, 7];
    const result = [
      [1, 2, 4, 5, 3, 6, 7], // 전위 순회
      [4, 2, 5, 1, 6, 3, 7], // 중위 순회
      [4, 5, 2, 6, 7, 3, 1], // 후위 순회
    ];
    expect(solution(nodes)).toEqual(result);
  });

  test('노드가 하나만 있는 경우', () => {
    const nodes = [1];
    const result = [[1], [1], [1]];
    expect(solution(nodes)).toEqual(result);
  });

  test('노드가 없는 경우', () => {
    const nodes = [];
    const result = [[], [], []];
    expect(solution(nodes)).toEqual(result);
  });
});
