/**
 * 몸풀기 문제
 * https://github.com/kciter/coding-interview-js/blob/main/solution/08.js
 *
 * 소괄호는 짝을 맞춘 열린 괄호 '('와 닫힌 괄호 ')'로 구성합니다. 문제에서는 열린 괄호나 닫힌 괄호가 마구 뒤섞인 문자열이 줍니다.
 * 이 때 소괄호가 정상으로 열고 닫혔는지 판별하는 solution 함수를 구현하세요.
 * 만약 소괄호가 정상으로 열고 닫혔다면 true를 반환하고, 그렇지 않다면 false를 반환하면 됩니다.
 */

// 1. '(' 문자열을 만나면 스택에 push
// 2. ')' 문자열을 만나면 스택에서 pop
// 3. 스택이 비어있으면 true, 아니면 false

export default function solution(str) {
  const stack = [];
  let result = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else if (str[i] === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  result = stack.length === 0;
  return result;
}
