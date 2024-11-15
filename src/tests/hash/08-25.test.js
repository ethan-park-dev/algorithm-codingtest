import solution from '../../main/hash/08-25';

describe('메뉴 리뉴얼', () => {
  test('예제 케이스 1', () => {
    const orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
    const course = [2, 3, 4];
    const result = ['AC', 'ACDE', 'BCFG', 'CDE'];
    expect(solution(orders, course)).toEqual(result);
  });

  test('예제 케이스 2', () => {
    const orders = ['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'];
    const course = [2, 3, 5];
    const result = ['ACD', 'AD', 'ADE', 'CD', 'XYZ'];
    expect(solution(orders, course)).toEqual(result);
  });

  test('예제 케이스 3', () => {
    const orders = ['XYZ', 'XWY', 'WXA'];
    const course = [2, 3, 4];
    const result = ['WX', 'XY'];
    expect(solution(orders, course)).toEqual(result);
  });

  test('모든 조합이 유효하지 않은 경우', () => {
    const orders = ['A', 'B', 'C'];
    const course = [2];
    const result = [];
    expect(solution(orders, course)).toEqual(result);
  });

  test('조합 길이가 주문 길이를 초과하는 경우', () => {
    const orders = ['AB', 'CD'];
    const course = [3];
    const result = [];
    expect(solution(orders, course)).toEqual(result);
  });
});
