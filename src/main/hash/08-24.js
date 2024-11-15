/**
 * 신고 결과 받기
 *
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/92334
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/24.js
 *
 * 문제 설명
 *  신입 사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다.
 *  무지가 개발하려는 시스템은 다음과 같습니다.
 *   - 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
 *     - 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
 *     - 한 유저를 여러 번 신고할 수 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
 *   - k번 이상 신고된 유저는 즉시 이용 정지 조치를 취하며, 해당 유저를 신고한 사람에게는 이용 정지 사실을 메일로 발송합니다.
 *     - 유저가 신고한 모든 내용을 취합해 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
 *  다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2, 즉 2번 이상 신고당하면 이용 정지를 보여주는 예입니다.
 *   - 유저 ID: "muzi", 유저가 신고한 ID: "frodo", 설명: "muzi가 frodo를 신고했습니다."
 *   - 유저 ID: "apeach", 유저가 신고한 ID: "frodo", 설명: "apeach가 frodo를 신고했습니다."
 *   - 유저 ID: "frodo", 유저가 신고한 ID: "neo", 설명: "frodo가 neo를 신고했습니다."
 *   - 유저 ID: "muzi", 유저가 신고한 ID: "neo", 설명: "muzi가 neo를 신고했습니다."
 *   - 유저 ID: "apeach", 유저가 신고한 ID: "muzi", 설명: "apeach가 muzi를 신고했습니다."
 *
 *  각 유저별로 신고당한 횟수는 다음과 같습니다.
 *   - 유저 ID: "muzi", 신고당한 횟수: 1
 *   - 유저 ID: "frodo", 신고당한 횟수: 2
 *   - 유저 ID: "apeach", 신고당한 횟수: 0
 *   - 유저 ID: "neo", 신고당한 횟수: 2
 *  위 예시에서는 2번 이상 신고당한 "frodo"와 "neo"의 게시판 이용이 정지 됩니다. 이때 각 유저별로 신고한 아이디와 정지된 아이디를
 *  정리하면 다음과 같습니다.
 *
 *  - 유저 ID: "muzi", 유저가 신고한 ID: ["frodo", "neo"], 정지된 ID: ["frodo", "neo"]
 *  - 유저 ID: "frodo", 유저가 신고한 ID: ["neo"], 정지된 ID: ["neo"]
 *  - 유저 ID: "apeach", 유저가 신고한 ID: ["muzi", "frodo"], 정지된 ID: ["frodo"]
 *  - 유저 ID: "neo", 유저가 신고한 ID: 없음, 정지된 ID: 없음
 *
 *  따라서 "muzi"는 처리 결과 메일을 2회, "frodo"와 "apeach"는 각각 처리 결과 메일을 1회 받게 됩니다.
 *  이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report,
 *  정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아
 *  반환하는 solution 함수를 완성해 주세요.
 *
 * 제약 조건
 * - 2 <= id_list의 길이 <= 1,000
 *   - 1 <= id_list의 원소 길이 <= 10
 *   - id_list의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어져 있습니다.
 *   - id_list에는 같은 아이디가 중복해서 들어있지 않습니다.
 * - 1 <= report의 길이 <= 200,000
 *   - 3 <= report의 원소 길이 <= 21
 *   - report의 원소는 "이용자id 신고한id" 형태의 문자열입니다.
 *   - 예를 들어 "muzi frodo"는 "muzi"가 "frodo"를 신고했다는 의미입니다.
 *   - id는 알파벳 소문자로만 이루어져 있습니다.
 *   - 이용자id와 신고한id는 공백으로 구분되어 있습니다.
 *   - 자기 자신을 신고하는 경우는 없습니다.
 * - 1 <= k <= 200 k는 자연수입니다.
 * - 반환하는 배열은 id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 담으면 됩니다.
 *
 * 입출력 예
 * - id_list: ["muzi", "frodo", "apeach", "neo"], report: ["muzi frodo", "apeach muzi", "frodo neo", "muzi neo", "apeach muzi"], k: 2, return: [2, 1, 1, 0]
 * - id_list: ["con", "ryan"], report: ["ryan con", "ryan con", "ryan con", "ryan con"], k: 3, return: [0, 0]
 */

export default function solution(id_list, report, k) {
  const answer = [];

  // 신고당한 유저 - 신고 유저 집합을 저장할 오브젝트
  const reportedUser = {};
  // 처리 결과 메일을 받은 유저 - 받은 횟수를 저장할 오브젝트
  const count = {};

  // 신고 기록 순회
  for (const r of report) {
    const [userId, reportedId] = r.split(' ');
    // 신고 당한 기록이 없다면
    if (!reportedUser[reportedId]) {
      reportedUser[reportedId] = new Set();
    }
    // 신고한 사람의 아이디를 집합에 담아 오브젝트에 저장
    reportedUser[reportedId].add(userId);
  }

  // 신고당한 유저별로 신고당한 횟수를 확인
  for (const reportedId of Object.keys(reportedUser)) {
    // 정지 기준에 만족하는지 확인
    if (reportedUser[reportedId].size >= k) {
      // 신고한 유저별로 처리 결과 메일을 받은 횟수를 확인
      for (const userId of reportedUser[reportedId]) {
        count[userId] = (count[userId] || 0) + 1;
      }
    }
  }

  //각 아이디별 메일을 받은 횟수를 순서대로 정리
  for (let i = 0; i < id_list.length; i++) {
    answer.push(count[id_list[i]] || 0);
  }

  return answer;
}
