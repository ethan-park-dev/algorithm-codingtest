import solution from '../../main/queue/07-17';

describe('카드 뭉치 문제 테스트', () => {
  test('기본 테스트 케이스 1', () => {
    const cards1 = ['i', 'drink', 'water'];
    const cards2 = ['want', 'to'];
    const goal = ['i', 'want', 'to', 'drink', 'water'];
    const expected = 'Yes';
    expect(solution(cards1, cards2, goal)).toEqual(expected);
  });

  test('기본 테스트 케이스 2', () => {
    const cards1 = ['i', 'water', 'drink'];
    const cards2 = ['want', 'to'];
    const goal = ['i', 'want', 'to', 'drink', 'water'];
    const expected = 'No';
    expect(solution(cards1, cards2, goal)).toEqual(expected);
  });

  test('모든 단어를 cards1에서만 사용하는 경우', () => {
    const cards1 = ['hello', 'world'];
    const cards2 = ['nice', 'to', 'meet', 'you'];
    const goal = ['hello', 'world'];
    const expected = 'Yes';
    expect(solution(cards1, cards2, goal)).toEqual(expected);
  });

  test('모든 단어를 cards2에서만 사용하는 경우', () => {
    const cards1 = ['a', 'b'];
    const cards2 = ['c', 'd'];
    const goal = ['c', 'd'];
    const expected = 'Yes';
    expect(solution(cards1, cards2, goal)).toEqual(expected);
  });

  test('goal에 cards1과 cards2의 단어가 섞여 있는 경우', () => {
    const cards1 = ['this', 'is'];
    const cards2 = ['a', 'test'];
    const goal = ['this', 'a', 'is', 'test'];
    const expected = 'Yes';
    expect(solution(cards1, cards2, goal)).toEqual(expected);
  });

  test('goal을 만들 수 없는 경우', () => {
    const cards1 = ['i', 'love'];
    const cards2 = ['you', 'so'];
    const goal = ['i', 'so', 'love', 'you'];
    const expected = 'No';
    expect(solution(cards1, cards2, goal)).toEqual(expected);
  });
});
