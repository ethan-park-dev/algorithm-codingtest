/**
 * 크레인 인형뽑기 게임
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/64061
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/13.js
 *
 * 문제 설명:
 * 게임개발자인 "죠르디"는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
 * 조르디는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.
 * 게임 화면은 1 x 1 크기의 칸들로 이루어진 N x N 크기의 정사각 격자이며 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다.
 * 여러분이 보고 있는 화면은 5*5 크기의 격자 예입니다.
 * 각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 인형은 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓입니다.
 * 플레이어는 크레인을 좌우로 움직일 수 있고 크레인을 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다.
 * 집어 올린 인형은 바구니에 쌓입니다. 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다.
 * 다음은 1,2,3 [1번, 5번, 3번]위치에서 인형을 집어 올려 바구니에 담은 모습입니다.
 * 이 상테에서 4번 네모 인형이 1개 더 들어가면 어떻게 될까요?
 * 같은 모양의 인형 2개가 바구니에 연속해 쌓이면 두 인형은 펑하고 터지며 사라집니다.
 * 만약 인형이 없는 곳에서 크레인을 작동시키면 아무런 일도 일어나지 않습니다.
 * 또 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 큽니다. 2차원 배열 board와 인형을 집는 크레인을 작동시킨 위치가
 * 담긴 배열 moves가 주어질 때, 크레인을 모두 작동시킨 후 사라진 인형개수를 반환한느 solution 함수를 완성하세요.
 *
 * 제약 조건
 * - board 배열은 5 x 5 이상 30 x 30 이하인 배열입니다.
 * - board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
 *   - 0은 빈 칸을 나타냅니다.
 *   - 1 ~ 100은 각각 다른 인형의 모양을 나타냅니다.
 * - moves 배열의 크기는 1 이상 1,000 이하입니다.
 * - moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.
 *
 * 입출력 예
 * - board: [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], moves: [1,5,3,5,1,2,1,4], result: 4
 */

export default function solution(board, moves) {
  const stack = [];
  let answer = 0;

  // 크레인 동작에 따라 인형을 뽑아 바구니에 넣는 과정
  for (const move of moves) {
    const col = move - 1; // moves는 1부터 시작하므로 배열 인덱스를 맞추기 위해 1을 뺌

    // 보드의 해당 열에서 가장 위에 있는 인형을 찾음
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] !== 0) {
        const doll = board[row][col];
        board[row][col] = 0; // 인형을 뽑았으므로 해당 자리를 빈칸으로 만듦

        // 바구니의 맨 위 인형과 뽑은 인형이 같은지 확인
        if (stack.length > 0 && stack[stack.length - 1] === doll) {
          stack.pop(); // 같은 인형이 있으면 제거
          answer += 2; // 사라진 인형 수를 2개 증가시킴
        } else {
          stack.push(doll); // 그렇지 않으면 바구니에 인형을 추가
        }
        break; // 한 번 인형을 뽑으면 그 열에서 더 이상 찾지 않음
      }
    }
  }

  return answer;
}
