import solution from '../../main/hash/08-22';

describe('오픈 채팅방', () => {
  test('기본 입출력 결과 케이스', () => {
    const record = [
      'Enter uid1234 Muzi',
      'Enter uid4567 Prodo',
      'Leave uid1234',
      'Enter uid1234 Prodo',
      'Change uid4567 Ryan',
    ];
    const result = [
      'Prodo님이 들어왔습니다.',
      'Ryan님이 들어왔습니다.',
      'Prodo님이 나갔습니다.',
      'Prodo님이 들어왔습니다.',
    ];
    expect(solution(record)).toEqual(result);
  });

  test('단일 사용자가 여러번 입장과 나가기 반복한 케이스', () => {
    const record = [
      'Enter uid1234 Muzi',
      'Leave uid1234',
      'Enter uid1234 Muzi',
      'Leave uid1234',
    ];
    const result = [
      'Muzi님이 들어왔습니다.',
      'Muzi님이 나갔습니다.',
      'Muzi님이 들어왔습니다.',
      'Muzi님이 나갔습니다.',
    ];
    expect(solution(record)).toEqual(result);
  });

  test('입장 후 닉네임을 변경한 케이스', () => {
    const record = [
      'Enter uid1234 Muzi',
      'Change uid1234 Prodo',
      'Leave uid1234',
    ];
    const result = ['Prodo님이 들어왔습니다.', 'Prodo님이 나갔습니다.'];
    expect(solution(record)).toEqual(result);
  });

  test('닉네임을 여러번 변경한 케이스', () => {
    const record = [
      'Enter uid1234 Muzi',
      'Change uid1234 Prodo',
      'Change uid1234 Ryan',
      'Leave uid1234',
    ];
    const result = ['Ryan님이 들어왔습니다.', 'Ryan님이 나갔습니다.'];
    expect(solution(record)).toEqual(result);
  });
});
