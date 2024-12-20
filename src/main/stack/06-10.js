/**
 * 괄호 회전하기
 * - 문제: https://programmers.co.kr/learn/courses/30/lessons/76502
 * - 정답: https://github.com/kciter/coding-interview-js/blob/main/solution/10.js
 *
 * 다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.
 * - (), [], {} 는 모두 올바른 괄호 문자열입니다.
 * - 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이라면, ([]) 도 올바른 괄호 문자열입니다.
 * - 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이라면, {}([]) 도 올바른 괄호 문자열입니다.
 *
 * 대괄호, 중괄호 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다.
 * 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * - s의 길이는 1 이상 1,000 이하입니다.
 *
 * 입출력 예
 * - s: "[](){}", result: 3
 * - s: "}]()[{", result: 2
 * - s: "[)(]", result: 0
 * - s: "}}}", result: 0
 */

export default function solution(s) {
  let answer = 0;
  const strLength = s.length;

  // 문자열 회전
  for (let i = 0; i < strLength; i++) {
    const stack = [];
    let isCorrect = true;

    for (let j = 0; j < strLength; j++) {
      const c = s[(i + j) % strLength];

      if (c === '(' || c === '[' || c === '{') {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }

        const top = stack[stack.length - 1];

        if (c === ']' && top === '[') {
          stack.pop();
        } else if (c === ')' && top === '(') {
          stack.pop();
        } else if (c === '}' && top === '{') {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }

    if (isCorrect && stack.length === 0) {
      answer++;
    }
  }

  return answer;
}
