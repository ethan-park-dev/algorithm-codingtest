/**
 * 10 진수를 2진수로 변환하기
 * https://github.com/kciter/coding-interview-js/blob/main/solution/09.js
 *
 * 10 진수를 입력받아 2진수로 변환해 반환하는 solution 함수를 작성하세요.
 */

// 1. 10 진수를 2로 나눈 나머지를 스택에 push
// 2. 10 진수를 2로 나눈 몫이 0이 될 때까지 반복
// 3. 스택에 있는 값을 pop하여 반환

export default function solution(n) {
  const stack = [];
  let result = '';

  while (n > 0) {
    stack.push(n % 2);
    n = Math.floor(n / 2);
  }

  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}
