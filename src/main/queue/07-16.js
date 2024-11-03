/**
 * 문제 16 기능 개발
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/42586
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/16.js
 *
 * 문제 설명:
 *  프로그래머스팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
 *  또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수도 있습니다.
 *  이 때 뒤의 기능은 앞의 기능이 배포될 때 함께 배포되어야 합니다. 배포 순서대로 작업 진도가 적힌 정수 배열 progresses와
 *  각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록
 *  solution 함수를 완성하세요.
 *
 * 제약 조건
 *  - 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
 *  - 작업 진도는 100 미만의 자연수입니다.
 *  - 작업 속도는 100 이하의 자연수입니다.
 *  - 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다.
 *    예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
 *
 * 입출력 예
 * - progresses: [93, 30, 55], speeds: [1, 30, 5], result: [2, 1]
 * - progresses: [95, 90, 99, 99, 80, 99], speeds: [1, 1, 1, 1, 1, 1], result: [1, 3, 2]
 */

export default function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let max = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (max >= days[i]) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      max = days[i];
    }
  }

  answer.push(count);

  return answer;
}
