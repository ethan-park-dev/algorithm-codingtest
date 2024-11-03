import solution from '../../main/stack/06-13';

describe('solution', () => {
  test('기본 테스트 케이스 1', () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ];
    const moves = [1, 5, 3, 5, 1, 2, 1, 4];
    const expected = 4;
    expect(solution(board, moves)).toEqual(expected);
  });
});
