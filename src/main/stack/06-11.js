/**
 * 짝지어 제거하기
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/12973
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/11.js
 *
 * 문제 설명:
 *  알파벳 소문자로 구성된 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다.
 *  짝을 찾은 다음에는 그 둘을 제거하고, 앞뒤로 문자열을 이어 붙입니다.이 과정을 반복해서 문자열을 모두 제거한다면 짝지어
 *  제거하기가 종료됩니다. 문자열 s가 주어질 때 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성하세요.
 *  성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴합니다.
 *
 * 제약 조건
 * - 문자열 s의 길이 : 1,000,000 이하의 자연수
 * - 문자열 s는 알파벳 소문자로만 이루어져 있습니다.
 *
 * 입출력 예
 * - s: baabaa, result: 1
 * - s: cdcd, result: 0
 */

export default function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === s[i]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}
