import solution from '../../main/set/10-33';

describe('유니온-파인드 알고리즘', () => {
  test('예제 케이스 1', () => {
    const k = 3;
    const operations = [
      ['u', 0, 1],
      ['u', 1, 2],
      ['f', 2],
    ];
    const result = 1;
    expect(solution(k, operations)).toBe(result);
  });

  test('예제 케이스 2', () => {
    const k = 4;
    const operations = [
      ['u', 0, 1],
      ['u', 2, 3],
      ['f', 0],
    ];
    const result = 2;
    expect(solution(k, operations)).toBe(result);
  });

  test('노드가 독립적인 경우', () => {
    const k = 5;
    const operations = [];
    const result = 5;
    expect(solution(k, operations)).toBe(result);
  });

  test('모든 노드 병합', () => {
    const k = 6;
    const operations = [
      ['u', 0, 1],
      ['u', 1, 2],
      ['u', 2, 3],
      ['u', 3, 4],
      ['u', 4, 5],
    ];
    const result = 1;
    expect(solution(k, operations)).toBe(result);
  });
});
