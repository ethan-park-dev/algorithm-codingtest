/**
 * 미로 탈출
 *
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/159993
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/30.js
 *
 * 문제 설명
 *  1 x 1 크기의 칸들로 이루어진 직사각형 격자 형태의 미로에서 탈출하려고 합니다. 각 칸은 통로 또는 벽으로 구성되어 있으며,
 *  벽으로 된 칸은 지나갈 수 없고 통로로 된 칸으로만 이동할 수 있습니다. 통로들 중 한 칸에는 미로를 빠져나가는 문이 있는데,
 *  이 문은 레버를 당겨서만 열 수 있습니다. 레버 또한 통로들 중 한 칸에 있습니다. 따라서, 출발 지점에서 먼저 레버가 있는 칸으로 이동하여
 *  레버를 당긴 후 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다. 이때 아직 레버를 당기지 않았더라도 출구가 있는 칸을 지나갈 수 있습니다.
 *  미로에서 한 칸을 이동하는데 1초가 걸린다고 할 때, 최대한 빠르게 미로를 빠져나가는데 걸리는 시간을 구하려 합니다.
 *  미로를 나타낸 문자열 배열 maps가 매개변수로 주어질 때, 미로를 탈출하는데 필요한 최소 시간을 return 하는 solution 함수를 완성해주세요.
 *  만약, 탈출할 수 없다면 -1을 return 해주세요.
 *
 * 제약 조건
 * - 5 <= maps의 길이 <= 100
 *   - 5 <= maps[i]의 길이 <= 100
 *   - maps[i]는 다음 5개의 문자들로만 이루어져 있습니다
 *    - S : 시작 지점
 *    - E : 출구
 *    - L : 레버
 *    - O : 통로
 *    - X : 벽
 *   - 시작 지점과 출구, 레버는 항상 다른 곳에 존재하며 한 개씩만 존재합니다.
 *   - 출구는 레버가 당겨지지 않아도 지나갈 수 있으며, 모든 통로, 출구, 레버, 시작점은 여러 번 지나갈 수 있습니다.
 *
 * 입출력 예
 * - maps: ["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"], return: 16
 * - maps: ["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"], return: -1
 */
export default function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;

  const directions = [
    [0, 1], // 오른쪽
    [1, 0], // 아래
    [0, -1], // 왼쪽
    [-1, 0], // 위
  ];

  const bfs = (start, target) => {
    const [startX, startY] = start;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const queue = [[startX, startY, 0]]; // [x, y, distance]
    visited[startX][startY] = true;

    while (queue.length) {
      const [x, y, dist] = queue.shift();

      // 목표 지점에 도달하면 거리 반환
      if (maps[x][y] === target) return dist;

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        // 유효한 좌표인지 확인하고, 방문하지 않았으며, 벽이 아니어야 함
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < rows &&
          ny < cols &&
          !visited[nx][ny] &&
          maps[nx][ny] !== 'X'
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }

    return -1; // 목표 지점에 도달할 수 없는 경우
  };

  // 시작점(S), 레버(L), 출구(E)의 위치 찾기
  let start, lever, exit;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] === 'S') start = [i, j];
      else if (maps[i][j] === 'L') lever = [i, j];
      else if (maps[i][j] === 'E') exit = [i, j];
    }
  }

  // 시작점에서 레버까지의 거리
  const startToLever = bfs(start, 'L');
  if (startToLever === -1) return -1;

  // 레버에서 출구까지의 거리
  const leverToExit = bfs(lever, 'E');
  if (leverToExit === -1) return -1;

  // 총 거리 반환
  return startToLever + leverToExit;
}
