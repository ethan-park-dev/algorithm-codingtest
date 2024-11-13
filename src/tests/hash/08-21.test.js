import solution from '../../main/hash/08-21';

describe('할인 행사', () => {
  test('Example Case 1', () => {
    const want = ['banana', 'apple', 'rice', 'pork', 'pot'];
    const number = [3, 2, 2, 2, 1];
    const discount = [
      'chicken',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ];
    expect(solution(want, number, discount)).toBe(3);
  });

  test('Example Case 2', () => {
    const want = ['apple'];
    const number = [10];
    const discount = [
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
    ];
    expect(solution(want, number, discount)).toBe(0);
  });

  test('No Matching Days', () => {
    const want = ['banana', 'apple'];
    const number = [1, 1];
    const discount = [
      'chicken',
      'chicken',
      'chicken',
      'chicken',
      'chicken',
      'chicken',
      'chicken',
      'chicken',
      'chicken',
      'chicken',
    ];
    expect(solution(want, number, discount)).toBe(0);
  });

  test('All Days Match', () => {
    const want = ['banana'];
    const number = [1];
    const discount = [
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
    ];

    expect(solution(want, number, discount)).toBe(0);
  });
});
