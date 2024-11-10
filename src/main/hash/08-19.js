/**
 * 문자열 해싱을 이용한 검색 함수 만들기
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/19.js
 *
 * 문제 설명
 *  문자열 리스트 stringList와 쿼리 리스트 queryList가 있을 때 각 쿼리 리스트에 있는 문자열이
 *  stringList의 문자열 리스트에 있는지 여부를 확인해야 합니다. 문자열이 있으면 true, 없으면 false가 됩니다.
 *  각 문자열에 대해서 문자열의 존재 여부를 리스트 형태로 반환하는 solution 함수를 작성해주세요.
 *
 * 제약 조건
 * - 입력 문자열은 영어 소문자로만 이루어져 있습니다.
 * - 문자열의 최대 길이는 10의6승입니다.
 * - 해시 충돌은 없습니다.
 * - 아래와 같은 문자열 해싱 방법을 활용해서 해싱 함수를 구현하세요.
 * - 다음 식에서 p는 31, m은 1,000,000,007입니다.
 *  - hash(s) = (s[0] + s[1] * p + s[2] * p^2 + ... + s[n-1] * p^(n-1)) % m
 *
 * 입출력 예
 * - stringList: ['apple', 'banana', 'cherry'] queryList: ['banana', 'kiwi', 'melon', 'apple'], return: [true, false, false, true]
 */

export default function solution(stringList, queryList) {
  const p = 31;
  const m = 1000000007;

  const hash = (s) => {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
      h = (h * p + s.charCodeAt(i)) % m;
    }

    return h;
  };

  const hashSet = new Set();
  for (let str of stringList) {
    hashSet.add(hash(str));
  }

  return queryList.map((query) => hashSet.has(hash(query)));
}
