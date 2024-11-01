/**
 * 문제 06 실패율
 * - 문제: https://programmers.co.kr/learn/courses/30/lessons/42889
 * - 정답: https://github.com/kciter/coding-interview-js/blob/main/solution/06.js
 *
 * 문제 설명
 * 슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다.
 * 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.
 * 이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다.
 * 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠졌다.
 * 오렐리를 위해 실패율을 구하는 코드를 완성하라.
 *
 * 실패율은 다음과 같이 정의한다.
 * - 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 *
 * 구현 조건
 * 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
 * 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
 *
 * 제약 조건
 * - 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
 * - stages의 길이는 1 이상 200,000 이하이다.
 * - stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
 *   - 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
 *   - 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
 * 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
 * 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
 *
 * 입출력 예
 * - N: 5
 * - stages: [2, 1, 2, 6, 2, 4, 3, 3]
 * - return: [3, 4, 2, 1, 5]
 *
 * - N: 4
 * - stages: [4, 4, 4, 4, 4]
 * - return: [4, 1, 2, 3]
 *
 * - N: 8
 * - stages: [1, 2, 3, 4, 5, 6, 7]
 * - return: [7, 6, 5, 4, 3, 2, 1, 8]
 *
 * - N: 3
 * - stages: [2, 2, 2, 2, 2]
 * - return: [2, 1, 3]
 */

export default function solution(N, stages) {
  // 1. 각 스테이지에 도달한 사용자 수와 클리어하지 못한 사용자 수 계산
  let failureRates = [];
  let totalPlayers = stages.length;

  for (let stage = 1; stage <= N; stage++) {
    const notCleared = stages.filter((s) => s === stage).length;
    const reached = totalPlayers;

    let failureRate = 0;
    if (reached !== 0) {
      failureRate = notCleared / reached;
    }

    failureRates.push({ stage, failureRate });
    totalPlayers -= notCleared;
  }

  // 2. 실패율 기준으로 내림차순 정렬 (실패율이 같으면 스테이지 번호 오름차순)
  failureRates.sort((a, b) => {
    if (b.failureRate === a.failureRate) {
      return a.stage - b.stage;
    }
    return b.failureRate - a.failureRate;
  });

  // 3. 스테이지 번호만 배열로 추출하여 반환
  return failureRates.map((obj) => obj.stage);
}
