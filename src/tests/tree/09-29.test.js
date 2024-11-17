import solution from '../../main/tree/09-29';

describe('다단계 칫솔 판매', () => {
  test('예제 케이스 1', () => {
    const enroll = [
      'john',
      'mary',
      'edward',
      'sam',
      'emily',
      'jaimie',
      'tod',
      'young',
    ];
    const referral = [
      '-',
      '-',
      'mary',
      'edward',
      'mary',
      'mary',
      'jaimie',
      'edward',
    ];
    const seller = ['young', 'john', 'tod', 'emily', 'mary'];
    const amount = [12, 4, 2, 5, 10];
    const result = [360, 958, 108, 0, 450, 18, 180, 1080];
    expect(solution(enroll, referral, seller, amount)).toEqual(result);
  });

  test('예제 케이스 2', () => {
    const enroll = [
      'john',
      'mary',
      'edward',
      'sam',
      'emily',
      'jaimie',
      'tod',
      'young',
    ];
    const referral = [
      '-',
      '-',
      'mary',
      'edward',
      'mary',
      'mary',
      'jaimie',
      'edward',
    ];
    const seller = ['sam', 'emily', 'jaimie', 'edward'];
    const amount = [2, 3, 5, 4];
    const result = [0, 110, 378, 180, 270, 450, 0, 0];
    expect(solution(enroll, referral, seller, amount)).toEqual(result);
  });

  test('추천인이 없는 판매원만 있는 경우', () => {
    const enroll = ['a', 'b', 'c'];
    const referral = ['-', '-', '-'];
    const seller = ['a', 'b', 'c'];
    const amount = [1, 1, 1];
    const result = [90, 90, 90];
    expect(solution(enroll, referral, seller, amount)).toEqual(result);
  });
});
