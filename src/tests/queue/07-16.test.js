import solution from '../../main/queue/07-16';

describe('기능 개발 문제 테스트', () => {
  test('첫 번째 예시: progresses = [93, 30, 55], speeds = [1, 30, 5]', () => {
    const progresses = [93, 30, 55];
    const speeds = [1, 30, 5];
    const result = solution(progresses, speeds);
    expect(result).toEqual([2, 1]);
  });

  test('두 번째 예시: progresses = [95, 90, 99, 99, 80, 99], speeds = [1, 1, 1, 1, 1, 1]', () => {
    const progresses = [95, 90, 99, 99, 80, 99];
    const speeds = [1, 1, 1, 1, 1, 1];
    const result = solution(progresses, speeds);
    expect(result).toEqual([1, 3, 2]);
  });

  test('모든 작업이 동일한 속도로 완료되는 경우', () => {
    const progresses = [50, 50, 50];
    const speeds = [50, 50, 50];
    const result = solution(progresses, speeds);
    expect(result).toEqual([3]);
  });

  test('모든 작업이 매일 1씩 진행되는 경우', () => {
    const progresses = [99, 1, 1, 1, 1];
    const speeds = [1, 1, 1, 1, 1];
    const result = solution(progresses, speeds);
    expect(result).toEqual([1, 4]);
  });

  test('모든 기능이 동일한 진도와 속도일 때', () => {
    const progresses = [80, 80, 80];
    const speeds = [20, 20, 20];
    const result = solution(progresses, speeds);
    expect(result).toEqual([3]);
  });
});
