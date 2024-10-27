import solution from '../../main/array/05-5-06';

describe('문제06 실패율', () => {
  test('기본 테스트 케이스 1', () => {
    const N = 5;
    const stages = [2, 1, 2, 6, 2, 4, 3, 3];
    const expected = [3, 4, 2, 1, 5];
    expect(solution(N, stages)).toEqual(expected);
  });

  test('기본 테스트 케이스 2', () => {
    const N = 4;
    const stages = [4, 4, 4, 4, 4];
    const expected = [4, 1, 2, 3];
    expect(solution(N, stages)).toEqual(expected);
  });

  test('모든 사용자가 마지막 스테이지를 클리어한 경우', () => {
    const N = 3;
    const stages = [4, 4, 4, 4];
    const expected = [1, 2, 3];
    expect(solution(N, stages)).toEqual(expected);
  });

  test('사용자가 한 명도 없는 경우', () => {
    const N = 3;
    const stages = [];
    const expected = [1, 2, 3];
    expect(solution(N, stages)).toEqual(expected);
  });

  test('모든 사용자가 스테이지 1에 멈춘 경우', () => {
    const N = 3;
    const stages = [1, 1, 1, 1];
    const expected = [1, 2, 3];
    expect(solution(N, stages)).toEqual(expected);
  });

  test('스테이지가 큰 경우', () => {
    const N = 5;
    const stages = [1, 2, 2, 1, 3, 4, 2, 3, 5, 5];
    const expected = [2, 3, 1, 4, 5];
    expect(solution(N, stages)).toEqual(expected);
  });
});
