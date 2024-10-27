/**
 * 문제 05 행렬의 곱셈
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/12949
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/05.js
 * 문제 설명: 두 행렬 arr1과 arr2를 입력받아 두 행렬의 곱을 반환하는 함수를 작성하세요.
 * 제약 조건
 *  - 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
 *  - 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
 *  - 곱할 수 있는 배열만 주어집니다.
 * 예시 1
 * - arr1: [[1, 4], [3, 2], [4, 1]]
 * - arr2: [[3, 3], [3, 3]]
 * - return: [[15, 15], [15, 15], [15, 15]]
 * 예시 2
 * - arr1: [[2, 3, 2], [4, 2, 4], [3, 1, 4]]
 * - arr2: [[5, 4, 3], [2, 4, 1], [3, 1, 1]]
 * - return: [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
 */
export default function solution(arr1, arr2) {
  let answers = [];

  // 첫번째 풀이
  for (let i = 0; i < arr1.length; i++) {
    const answer = [];

    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < arr1[0].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }

      answer.push(sum);
    }

    answers.push(answer);
  }
  // 두번째 풀이
  // answers = arr1.map((row, i) =>
  //   arr2[0].map((_, j) =>
  //     row.reduce((sum, _, k) => sum + arr1[i][k] * arr2[k][j], 0)
  //   )
  // );
  return answers;
}
