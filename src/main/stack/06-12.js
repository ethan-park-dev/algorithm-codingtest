/**
 * 문제: 주식 가격
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/42584
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/12.js
 *
 * 문제 설명:\
 *  n초 간의 주가를 초 단위로 기록한 배열 prices가 매개변수로 주어질 때, 각 초의 주가를 기준으로
 *  해당 초부터 n초 사이에 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.
 *
 * 제약 조건
 * - prices의 원소는 1 이상 10,000 이하인 자연수입니다.
 * - prices의 길이는 2 이상 100,000 이하입니다.
 *
 * 입출력 예
 * - prices: [1, 2, 3, 2, 3], result: [4, 3, 1, 1, 0]
 *
 * - 1초의 주가는 1이며, 1초부터 5초까지 총 4초간 가격이 떨어지지 않았습니다.
 * - 2초의 주가는 2이며, 2초부터 5초까지 총 3초간 가격이 떨어지지 않았습니다.
 * - 3초의 주가는 3이며, 4초의 주가는 2로 주가가 떨어졌습니다. 3초에서 4초가 되기 직전까지,
 *    즉 1초 동안 주가가 유지된 것으로 봅니다. 따라서 5초까지 총 1초 동안 주가를 유지 했습니다.
 * - 4초의 주가는 2이며 4초부터 5초까지 총 1초 동안 주가를 유지 했습니다.
 * - 5초의 주가는 3이며 5초 이후의 데이터는 없으므로 총 1초 동안 주가를 유지 했습니다.
 */

export default function solution(prices) {
  const answer = Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const top = stack.pop();
      answer[top] = i - top;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const top = stack.pop();
    answer[top] = prices.length - 1 - top;
  }

  return answer;
}
