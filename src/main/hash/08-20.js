/**
 * 완주하지 못한 선수
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/42576
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/20.js
 *
 * 문제 설명
 *  많은 선수 중 단 한명의 선수를 제외하고 모든 선수가 마라톤을 완주하였습니다. 마라톤에 참여한
 *  선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 있을 때,
 *  완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
 *
 * 제약 조건
 * - 마라톤 경기에 참여한 선수 수는 1명 이상 100,000명 이하입니다.
 * - completion의 길이는 participant의 길이보다 1 작습니다.
 * - 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
 * - 참가자 중에는 동명이인이 있을 수 있습니다.
 *
 * 입출력 예
 * - participant: ['leo', 'kiki', 'eden'], completion: ['eden', 'kiki'], return: 'leo'
 * - participant: ['marina', 'josipa', 'nikola', 'vinko', 'filipa'], completion: ['josipa', 'filipa', 'marina', 'nikola'], return: 'vinko'
 * - participant: ['mislav', 'stanko', 'mislav', 'ana'], completion: ['stanko', 'ana', 'mislav'], return: 'mislav'
 */

export default function solution(participant, completion) {
  const hash = new Set(completion);
  let answer = '';
  for (let name of participant) {
    if (!hash.has(name)) {
      return name;
    }

    hash.delete(name);
  }

  return '';
}

// export default function solution(participant, completion) {
//   const hash = new Map();

//   // 각 참가자의 이름을 해시맵에 추가하여 카운팅
//   for (let name of participant) {
//     hash.set(name, (hash.get(name) || 0) + 1);
//   }

//   // 완주한 선수의 이름을 해시맵에서 감소
//   for (let name of completion) {
//     if (hash.has(name)) {
//       hash.set(name, hash.get(name) - 1);
//     }
//   }

//   // 해시맵에서 값이 1인 이름을 찾아 반환
//   for (let [name, count] of hash) {
//     if (count > 0) {
//       return name;
//     }
//   }

//   return '';
// }
