/**
 * 두 개의 수로 특정 값 만들기
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/18.js
 *
 * 문제 설명:
 *  n개의 양의 정수로 이루어진 리스트 arr 와 정수 target이 주어졌을 때 이 중에서 합이 target인 두 수가
 *  arr에 있는지 찾고, 있으면 true, 없으면 false를 반환하는 solution 함수를 작성하라.
 *
 * 제약 조건
 *  - n은 2이상 10,000 이하의 자연수입니다.
 *  - arr의 각 원소는 1 이상 10,000 이하의 자연수입니다.
 *  - arr의 원소 중 중복되는 원소는 없습니다.
 *  - target은 1 이상 20,000 이하의 자연수입니다.
 *
 * 입출력 예
 * - arr: [1, 2, 3, 4, 8] target: 6, result: true
 * - arr: [2, 3, 5, 9] target: 10, result: false
 */

export default function solution(arr, target) {
  const set = new Set();

  for (let num of arr) {
    if (set.has(target - num)) {
      return true;
    }

    set.add(num);
  }

  return false;
}
