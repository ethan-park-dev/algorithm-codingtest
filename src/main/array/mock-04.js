// 문제 04 모의고사
/**
 * 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
 * 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
 * 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 * 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
 * 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 * 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
 * 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해 주세요.
 **/

// 1. 수포자 1, 2, 3의 찍는 방식을 배열로 저장
// 2. 수포자 1, 2, 3의 점수를 저장할 배열 생성
// 3. 정답 배열을 순회하면서 각 수포자의 답과 비교하여 점수 계산
// 4. 가장 많이 맞힌 수포자를 찾아서 결과 배열에 추가
// 5. 결과 반환

export default function solution(answers) {
  const supoja1 = [1, 2, 3, 4, 5];
  const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const result = [];
  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === supoja1[i % supoja1.length]) {
      scores[0]++;
    }
    if (answers[i] === supoja2[i % supoja2.length]) {
      scores[1]++;
    }
    if (answers[i] === supoja3[i % supoja3.length]) {
      scores[2]++;
    }
  }

  const max = Math.max(...scores);

  scores.forEach((v, i) => {
    if (v === max) {
      result.push(i + 1);
    }
  });

  return result;
}
