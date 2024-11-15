import solution from '../../main/hash/08-24';
describe('신고 결과 받기', () => {
  test('예제 케이스 1', () => {
    const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
    const report = [
      'muzi frodo',
      'apeach frodo',
      'frodo neo',
      'muzi neo',
      'apeach muzi',
    ];
    const k = 2;
    const result = [2, 1, 1, 0];
    console.log(solution(id_list, report, k));
    expect(solution(id_list, report, k)).toEqual(result);
  });

  test('예제 케이스 2', () => {
    const id_list = ['con', 'ryan'];
    const report = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
    const k = 3;
    const result = [0, 0];
    expect(solution(id_list, report, k)).toEqual(result);
  });

  test('모든 사용자가 신고당하지 않는 경우', () => {
    const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
    const report = [];
    const k = 1;
    const result = [0, 0, 0, 0];
    expect(solution(id_list, report, k)).toEqual(result);
  });

  test('모든 사용자가 정지되는 경우', () => {
    const id_list = ['muzi', 'frodo'];
    const report = ['muzi frodo', 'frodo muzi'];
    const k = 1;
    const result = [1, 1];
    expect(solution(id_list, report, k)).toEqual(result);
  });

  test('신고 기준이 높은 경우', () => {
    const id_list = ['muzi', 'frodo', 'apeach'];
    const report = ['muzi frodo', 'frodo muzi', 'apeach muzi'];
    const k = 5;
    const result = [0, 0, 0];
    expect(solution(id_list, report, k)).toEqual(result);
  });
});
