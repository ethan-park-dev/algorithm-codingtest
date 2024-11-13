/**
 * 오픈 채팅방
 * 문제 URL: https://school.programmers.co.kr/learn/courses/30/lessons/42888
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/22.js
 *
 * 문제 설명
 *  카카오톡 오픈 채팅방에서는 친구가 아닌 사람들과 대화를 할 수 있는데 본래 닉네임이 아닌 가상의 닉네임을
 *  사용해 채팅방에 들어갈 수 있습니다. 신입 사원인 김크루는 카카오톡 오픈 채팅방을 개설한 사람을 위해
 *  다양한 사람들이 들어오고 나가는 것을 지켜볼 수 있는 관리자 창을 만들기로 했습니다.
 *
 *  예를 들어 채팅방에 누군가 들어오면 다음과 같이 메시지가 출력됩니다.
 *   - "[닉네임]님이 들어왔습니다."
 *
 *  채팅방에서 누군가 나가면 다음 메시지가 출력됩니다.
 *   - "[닉네임]님이 나갔습니다."
 *  채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두 가지 입니다.
 *   - 채팅방을 나간 후, 새로운 닉네임으로 다시 들어갑니다.
 *   - 채팅방에서 닉네임을 변경 합니다.
 *
 *  닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 바뀝니다. 예를 들어 채팅방에
 *  Muzzi와 Prodo라는 닉네임을 사용하는 사람이 순서대로 들어오면 채팅방에는 다음과 같이 메시지가 출력됩니다.
 *   - Muzzi님이 들어왔습니다.
 *   - Prodo님이 들어왔습니다.
 *
 *  채팅방에 있던 사람이 나가면 채팅방에는 다음과 같이 메시지가 남습니다.
 *   - Muzzi님이 들어왔습니다.
 *   - Prodo님이 들어왔습니다.
 *   - Muzzi님이 나갔습니다.
 *
 *  Muzzi가 나간 후 다시 들어올 때, Prodo라는 닉네임으로 들어올 경우 기존에 채팅방에 남아 있던 Muzzi도
 *  Muzzi도 Prodo로 다음과 같이 변경됩니다.
 *   - Prodo님이 들어왔습니다.
 *   - Prodo님이 들어왔습니다.
 *   - Prodo님이 나갔습니다.
 *   - Prodo님이 들어왔습니다.
 *
 *  채팅방은 중복 닉네임을 허용하므로 현재 채팅방에는 Prodo 라는 닉네임을 사용하는 사람이 두명입니다.
 *  이제 맨 처음 채팅방에 두 번째로 들어왔던 Prodo가 Ryan으로 닉네임을 변경하면 채팅방 메시지는 다음과 같이 변경 됩니다.
 *   - Prodo님이 들어왔습니다.
 *   - Ryan님이 들어왔습니다.
 *   - Prodo님이 나갔습니다.
 *   - Prodo님이 들어왔습니다.
 *
 *  채팅방에 들어오고 나가거나 닉네임을 변경한 기록이 담긴 문자열 배열 record가 매개 변수로 주어질 때 모든 기록이
 *  처리된 다음 최종으로 방을 개설한 사람이 보는 메시지를 문자열 배열 형태로 반환하는 solution()함수를 완성하세요.
 *
 * 제약 조건
 *  - record는 다음과 같은 문자열이 담긴 배열이며 길이는 1이상 100,000이하입니다.
 * 다음은 recodrd에 담긴 문자열에 대한 설명입니다.
 *  - 모든 유저는 [유저 아이디]로 구분합니다.
 *  - [유저아이디] 사용자가 [닉네임]으로 채팅방에 입장
 *    - "Enter [유저 아이디] [닉네임]" (ex. "Enter uid1234 Muzi")
 *  - [유저아이디] 사용자가 채팅방에서 퇴장
 *    - "Leave [유저 아이디]" (ex. "Leave uid1234")
 *  - [유저아이디] 사용자가 닉네임을 [닉네임]으로 변경
 *    - "Change [유저 아이디] [닉네임]" (ex. "Change uid1234 Muzi")
 *  - 첫 단어는 Enter, Leave, Change 중 하나임
 *  - 각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어짐
 *  - 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별
 *  - 유저 아이디와 닉네임의 길이는 1이상 10이하
 *  - 채팅방에서 나간 유저가 닉네임을 변경하는등 잘못된 입력은 주어지지 않음
 *
 * 입출력 예
 *  - record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
 *  - result = ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
 */

/**
 * 닉네임 저장 및 수정
 *    입장 및 변경
 * 최종 결과 메시지 출력
 *    최종 닉네임 [Enter | Leave]
 */
export default function solution(record) {
  const nicknameMap = {};
  const actionArr = [];

  for (let i = 0; i < record.length; i++) {
    const [cmd, uid, nickname] = record[i].split(' ');

    if (cmd === 'Enter' || cmd === 'Change') {
      nicknameMap[uid] = nickname;
    }

    if (cmd === 'Enter' || cmd === 'Leave') {
      actionArr.push([cmd, uid]);
    }
  }

  const result = actionArr.map(([cmd, uid]) => {
    const nickname = nicknameMap[uid];
    if (cmd === 'Enter') {
      return `${nickname}님이 들어왔습니다.`;
    } else if (cmd === 'Leave') {
      return `${nickname}님이 나갔습니다.`;
    }
  });

  return result;
}
