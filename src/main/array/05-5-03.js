// 문제: 두 개 뽑아서 더하기
// 1 유효한 배열인지 확인
//   1.1 배열의 길이가 2이상 100 이하인지 확인
//   1.2 배열의 요소가 0이상 100 이하인지 확인
// 2 중복된 합을 저장할 Set 생성
// 3 재귀 함수를 사용하여 모든 숫자의 합 계산
//   3.1 인덱스가 배열 길이를 초과하면 함수 종료
//   3.2 현재 숫자를 추가하고 다음 인덱스로 재귀 호출
// 4 결과 반환

export default function solution(arr) {
  if (arr.length < 2 || arr.length > 100) return [];

  const result = new Set();

  const recusiveSum = (idx, previousNumbers) => {
    if (idx >= arr.length) return;

    const num = arr[idx];

    previousNumbers.forEach((prev) => {
      result.add(prev + num);
    });

    recusiveSum(idx + 1, new Set([...previousNumbers, num]));
  };

  recusiveSum(0, new Set());

  return Array.from(result).sort((a, b) => a - b);
}
