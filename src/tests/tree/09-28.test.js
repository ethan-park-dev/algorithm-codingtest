import solution from '../../main/tree/09-28';

describe('예상 대진표', () => {
  test('예제 케이스 1', () => {
    const N = 8;
    const A = 4;
    const B = 7;
    const result = 3;
    expect(solution(N, A, B)).toBe(result);
  });

  test('A와 B가 처음부터 바로 붙는 경우', () => {
    const N = 8;
    const A = 1;
    const B = 2;
    const result = 1;
    expect(solution(N, A, B)).toBe(result);
  });

  test('A와 B가 마지막 라운드에서 만나는 경우', () => {
    const N = 16;
    const A = 1;
    const B = 16;
    const result = 4; // 4번 라운드에서 만남
    expect(solution(N, A, B)).toBe(result);
  });
});
