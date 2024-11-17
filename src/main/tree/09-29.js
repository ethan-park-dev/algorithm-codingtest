/**
 * 다단계 칫솔 판매
 *
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/77486
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/29.js
 *
 * 문제 설명
 *
 * 제약 조건
 * - enroll의 길이는 1 이상 10,000 이하입니다.
 *  - enroll에 민호의 이름은 없습니다. 따라서 enroll의 길이는 민호를 제외한 조직 구성원의 총 수입니다.
 * - referral의 길이는 enroll의 길이와 같습니다.
 *  - referral 내에서 i 번째에 있는 이름은 배열 enroll 내에서 i 번째에 있는 판매원을 조직에 참여시킨 사람의 이름입니다.
 *  - 어느 누구의 추천도 없이 조직에 참여한 사람에 대해서는 referral 배열 내에 추천인의 이름이 기입되지 않고 “-“ 가 기입됩니다.
 *    위 예제에서는 john 과 mary 가 이러한 예에 해당합니다.
 *  - enroll 에 등장하는 이름은 조직에 참여한 순서에 따릅니다.
 *  - 즉, 어느 판매원의 이름이 enroll 의 i 번째에 등장한다면, 이 판매원을 조직에 참여시킨 사람의 이름,
 *    즉 referral 의 i 번째 원소는 이미 배열 enroll 의 j 번째 (j < i) 에 등장했음이 보장됩니다.
 * - seller의 길이는 1 이상 100,000 이하입니다.
 *  - seller 내의 i 번째에 있는 이름은 i 번째 판매 집계 데이터가 어느 판매원에 의한 것인지를 나타냅니다.
 *  - seller 에는 같은 이름이 중복해서 들어있을 수 있습니다.
 * - amount의 길이는 seller의 길이와 같습니다.
 *  - amount 내의 i 번째에 있는 수는 i 번째 판매 집계 데이터의 판매량을 나타냅니다.
 *  - 판매량의 범위, 즉 amount 의 원소들의 범위는 1 이상 100 이하인 자연수입니다.
 * - 칫솔 한 개를 판매하여 얻어지는 이익은 100 원으로 정해져 있습니다.
 * - 모든 조직 구성원들의 이름은 10 글자 이내의 영문 알파벳 소문자들로만 이루어져 있습니다.
 *
 * 입출력 예
 * - enroll: ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"], referral: ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"], seller: ["young", "john", "tod", "emily", "mary"], amount: [12, 4, 2, 5, 10], return: [360, 958, 108, 0, 450, 18, 1080]
 * - enroll: ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"], referral: ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"], seller: ["sam", "emily", "jaimie", "edward"], amount: [2, 3, 5, 4], return: [0, 110, 378, 180, 270, 450, 0, 0]
 */

export default function solution(enroll, referral, seller, amount) {
  const earnings = {}; // 각 판매원의 이익
  const referrals = {}; // 추천 관계

  // 초기화
  enroll.forEach((name, index) => {
    earnings[name] = 0; // 초기 이익은 0
    referrals[name] = referral[index]; // 추천 관계 설정
  });

  const distributeEarnings = (seller, profit) => {
    if (seller === '-' || profit < 1) return; // 추천인이 없거나 배분할 금액이 없으면 종료

    const toReferrer = Math.floor(profit * 0.1); // 추천인에게 보낼 금액
    earnings[seller] += profit - toReferrer; // 본인이 가질 금액

    // 추천인에게 이익을 분배
    distributeEarnings(referrals[seller], toReferrer);
  };

  // 각 판매 기록 처리
  seller.forEach((name, index) => {
    const totalProfit = amount[index] * 100; // 판매 금액
    distributeEarnings(name, totalProfit);
  });

  // 결과 배열 생성
  return enroll.map((name) => earnings[name]);
}
