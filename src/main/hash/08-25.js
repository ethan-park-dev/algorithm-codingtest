/**
 * 메뉴 리뉴얼
 *
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/72411
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/25.js
 *
 * 문제 설명
 *  레스토랑을 운영하던 스카피는 코로나19로 인한 불경기를 극복하고자 메뉴를 새로 구성하려고 고민하고 있습니다.
 *  기존에는 단품으로만 제공하던 메뉴를 조합해서 코스요리 형태로 재구성해서 새로운 메뉴로 제공하기로 결정했습니다.
 *  어떤 단품메뉴들을 조합해서 코스요리 메뉴로 구성하면 좋을지 고민하던 "스카피"는 이전에 각 손님들이 주문할 때
 *  가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성하기로 했습니다. 단, 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로
 *  구성하려고 합니다. 또한 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함하기로
 *  했습니다. 예를 들어, 손님 6명이 주문한 단품메뉴들의 조합이 다음과 같다고 합시다. 이때 각 손님은
 *  단품 메뉴를 2개 이상 주문해야 하며, 각 단품메뉴는 A ~ Z의 알파벳 대문자로 표기합니다.
 *  - 손님 번호: 1번 손님, 단품 메뉴 조합: A, B, C, F, G
 *  - 손님 번호: 2번 손님, 단품 메뉴 조합: A, C
 *  - 손님 번호: 3번 손님, 단품 메뉴 조합: C, D, E
 *  - 손님 번호: 4번 손님, 단품 메뉴 조합: A, C, D, E
 *  - 손님 번호: 5번 손님, 단품 메뉴 조합: B, C, F, G
 *  - 손님 번호: 6번 손님, 단품 메뉴 조합: A, C, D, E, H
 *
 *  가장 많이 함께 주문된 단품 메뉴 조합에 따라 '스카피'가 만들게 될 코스요리 메뉴 구성 후보는 다음과 같습니다.
 *  - 코스 종류: 요리 2개 코스, 매뉴 구성: A, C, 설명: 1번,2번,4번,6번 손님으로부터 총 4번 주문됐습니다.
 *  - 코스 종류: 요리 3개 코스, 매뉴 구성: C, D, E, 설명: 3번,4번,6번 손님으로부터 총 3번 주문됐습니다.
 *  - 코스 종류: 요리 4개 코스, 매뉴 구성: B, C, F, G, 설명: 1번,5번 손님으로부터 총 2번 주문됐습니다.
 *  - 코스 종류: 요리 4개 코스, 매뉴 구성: A, C, D, E, 설명: 4번,6번 손님으로부터 총 2번 주문됐습니다.
 *
 *  각 손님들이 주문한 단품 메뉴들이 문자열 형식으로 담긴 배열 orders, "스카피"가 추가하고 싶어하는 코스요리를
 *  구성하는 단품 메뉴들의 갯수가 담긴 배열 course가 매개변수로 주어질 때, "스카피"가 새로 추가하게 될 코스요리의
 *  메뉴 구성을 문자열 형태로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.
 *
 * 제약 조건
 *  - orders 배열의 크기는 2 이상 20 이하입니다.
 *  - orders 배열의 각 원소는 크기가 2 이상 10 이하인 문자열입니다.
 *   - 각 문자열은 알파벳 대문자로만 이루어져 있습니다.
 *   - 각 문자열에는 같은 알파벳이 중복해서 들어있지 않습니다.
 *  - course 배열의 크기는 1 이상 10 이하입니다.
 *   - course 배열의 각 원소는 2 이상 10 이하인 자연수가 오름차순으로 정렬되어 있습니다.
 *   - course 배열에는 같은 값이 중복해서 들어있지 않습니다.
 *  - 정답은 각 코스요리 메뉴의 구성을 문자열 형식으로 배열에 담아 사전 순으로 오름차순 정렬하여 return 해주세요.
 *   - 배열의 각 원소에 저장된 문자열 또한 알파벳 오름차순으로 정렬되어 있어야 합니다.
 *   - 만약 가장 많이 함께 주문된 메뉴 조합이 여러 개라면, 모두 배열에 담아 return 하면 됩니다.
 *   - orders와 course 매개변수는 반환하는 배열의 길이가 1 이상이 되도록 주어집니다.
 *
 * 입출력 예
 * - orders: ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], course: [2, 3, 4], return: ["AC", "ACDE", "BCFG", "CDE"]
 * - orders: ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], course: [2, 3, 5], return: ["ACD", "AD", "ADE", "CD", "XYZ"]
 * - orders: ["XYZ", "XWY", "WXA"], course: [2, 3, 4], return: ["WX", "XY"]
 */

export default function solution(orders, course) {
  // 조합을 생성하는 함수
  const getCombinations = (arr, length) => {
    // 조합 길이가 1이면 배열의 각 원소를 개별 배열로 반환
    if (length === 1) return arr.map((item) => [item]);
    const combinations = [];
    // 배열의 각 원소에 대해 재귀적으로 조합 생성
    arr.forEach((current, index) => {
      const rest = arr.slice(index + 1); // 현재 원소 이후의 배열
      const smallerCombinations = getCombinations(rest, length - 1); // 나머지 조합 생성
      // 현재 원소와 나머지 조합을 결합하여 추가
      smallerCombinations.forEach((combination) =>
        combinations.push([current, ...combination])
      );
    });
    return combinations;
  };

  // 메뉴 조합의 빈도를 저장하는 Map 객체
  const menuMap = new Map();

  // 각 주문에 대해 가능한 조합 생성
  orders.forEach((order) => {
    const sortedOrder = order.split('').sort(); // 주문을 사전 순으로 정렬
    course.forEach((size) => {
      const combinations = getCombinations(sortedOrder, size); // 주어진 길이의 조합 생성
      combinations.forEach((combination) => {
        const menu = combination.join(''); // 조합을 문자열로 변환
        menuMap.set(menu, (menuMap.get(menu) || 0) + 1); // 빈도를 증가
      });
    });
  });

  // 결과를 저장할 배열
  const result = [];

  // 각 코스 크기별로 처리
  course.forEach((size) => {
    // 해당 크기의 조합 중 빈도가 2 이상인 것만 필터링
    const filtered = [...menuMap.entries()].filter(
      ([menu, count]) => menu.length === size && count > 1
    );

    if (filtered.length > 0) {
      // 최대 빈도를 계산
      const maxCount = Math.max(...filtered.map(([, count]) => count));
      // 최대 빈도와 같은 조합들을 결과에 추가
      filtered
        .filter(([, count]) => count === maxCount)
        .forEach(([menu]) => result.push(menu));
    }
  });

  // 사전 순으로 정렬하여 반환
  return result.sort();
}
