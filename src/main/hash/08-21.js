/**
 * 할인 행사
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/131127
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/21.js
 *
 * 문제 설명
 *  XYZ 마트는 일정 금액을 지불하면 10일 동안 회원 자격을 부여합니다. XYZ 마트에서는 회원을
 *  대상으로 매일 1가지 제품을 할인하는 행사를 합니다. 할인 제품은 하루에 하나만 구매할 수 있습니다.
 *  알뜰한 정현이는 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 때에 맞춰서 회원가입을 하려 합니다.
 *
 *  예를 들어 정현이가 원하는 제품이 바나나 3개, 사과2개, 쌀2개, 돼지고기 2개, 냄비 1개이고, XYZ 마트에서는
 *  14일간 회원을 대상으로 할인하는 제품이 날짜 순서대로 치킨, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나,
 *  돼지고기, 쌀, 냄비, 바나나, 사과, 바나나면 첫째 날부터 열흘동안은 냄비는 할인하지 않으므로 첫째 날에는
 *  회원가입을 하지 않습니다. 셋째, 넷째, 다섯쨰 날부터 각각 열흘동안은 원하는 제품과 수량이 일치하므로 셋 중
 *  하루에 회원가입을 합니다.
 *
 *  정현이가 원하는 제품을 나타내는 문자열 배열 want와 정현이가 원하는 제품의 수량을 나타내는 정수 배열
 *  number, XYZ 마트에서 할인하는 제품을 나타내는 문자열 배열 discount가 있을 때 회원가입 시
 *  정현이가 원하는 제품을 모두 할인 받을 수 있는 회원 등록 날짜의 총 일수를 반환하는 solution 함수를 완성하세요.
 *  가능한 날이 없으면 0을 반환합니다.
 *
 * 제약 조건
 * - 1 <= want의 길이 = number의 길이 <= 10
 *   - 1 <= number의 원소 <= 10
 *   - number[i]는 want[i]의 수량
 *   - number의 총합 10
 * - 10 <= discount의 길이 <= 100,000
 * - want와 discount의 원소들은 알파벳 소문자로 이루어진 문자열
 *   - 1 <= want의 원소의 길이, discount의 원소의 길이 <= 12
 *
 * 입출력 예
 * - want: ['banana', 'apple', 'rice', 'pork', 'pot'], number: [3, 2, 2, 2, 1], discount: ['chicken', 'apple', 'banana', 'rice', 'apple', 'pork', 'banana', 'pork', 'rice', 'pot', 'banana', 'apple', 'banana'], return: 3
 * - want: ['apple',], number: [10], discount: ['banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana'], return: 0
 */

/* 풀이 방법:
 * 1. 슬라이딩 윈도우와 Map을 활용한 해결 방법
 *
 * 2. 구현 단계:
 *    1) want와 number 배열로 원하는 제품과 수량을 Map으로 생성
 *    2) discount 배열을 10개씩 윈도우로 순회
 *    3) 각 윈도우마다 제품 수량을 Map으로 만들어 비교
 *    4) 모든 제품의 수량이 일치하면 결과값 증가
 *
 * 3. 코드 구현:
 */
export default function solution(want, number, discount) {
  // 필요한 제품 목록과 수량을 객체로 정의
  const wantMap = {};
  want.forEach((item, index) => {
    wantMap[item] = number[index];
  });

  // 할인 제품 리스트의 각 10일간의 구간을 확인
  // 슬라이딩 윈도우 기법을 사용하여 확인
  let result = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    const discountSlice = discount.slice(i, i + 10);
    const discountMap = {};

    // 현재 10일간의 할인 제품과 수량을 객체로 카운트
    for (let j = 0; j < i + 10; j++) {
      const item = discountSlice[j];
      discountMap[item] = (discountMap[item] || 0) + 1;
    }

    // 원하는 제품과 수량이 모두 일치하는지 확인
    let isMatch = true;

    for (const item in wantMap) {
      if (discountMap[item] !== wantMap[item]) {
        isMatch = false;
        break;
      }
    }

    // 모든 제품이 일치하면 결과값 증가
    if (isMatch) result++;
  }

  return result;
}
