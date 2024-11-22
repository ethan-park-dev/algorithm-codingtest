/**
 * 게임 맵 최단거리
 *
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/1844
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/42.js
 */

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  first() {
    return this.items[this.front];
  }

  last() {
    return this.items[this.rear - 1];
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

export default function solution(maps) {
  // ➊ 이동할 수 있는 방향을 나타내는 배열 move 선언
  const move = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  // ➋ 맵의 크기를 저장하는 변수 선언
  const n = maps.length;
  const m = maps[0].length;

  // ➌ 거리를 저장하는 배열 dist를 -1로 초기화
  const dist = Array.from({ length: n }, () => Array(m).fill(-1));

  // ➍ bfs 함수를 선언
  function bfs(start) {
    // ➎ queue를 선언하고 시작 위치를 queue에 추가
    const q = new Queue();
    q.push(start);
    dist[start[0]][start[1]] = 1;

    // ➏ queue가 빌 때까지 반복
    while (!q.isEmpty()) {
      const here = q.pop();

      // ➐ 현재 위치에서 이동할 수 있는 모든 방향
      for (const [dx, dy] of move) {
        const row = here[0] + dx;
        const column = here[1] + dy;

        // ➑ 이동한 위치가 범위를 벗어난 경우 다음 방향으로 넘어감
        if (row < 0 || row >= n || column < 0 || column >= m) {
          continue;
        }

        // ➒ 이동한 위치에 벽이 있는 경우 다음 방향으로 넘어
        if (maps[row][column] === 0) {
          continue;
        }

        // ➓ 이동한 위치가 처음 방문하는 경우, queue에 추가하고 거리 갱신
        if (dist[row][column] === -1) {
          q.push([row, column]);
          dist[row][column] = dist[here[0]][here[1]] + 1;
        }
      }
    }

    // 거리를 저장하는 배열 dist를 반환
    return dist;
  }

  // 시작 위치에서 bfs() 함수를 호출하여 거리 계산
  bfs([0, 0]);

  // 목적지까지의 거리 반환, 목적지에 도달하지 못한 경우 -1을 반환
  return dist[n - 1][m - 1];
}

// export default function solution(maps) {
//   const rows = maps.length; // 맵의 행 크기
//   const cols = maps[0].length; // 맵의 열 크기

//   // 네 방향으로 이동하기 위한 벡터
//   const directions = [
//       [-1, 0], // 위
//       [1, 0],  // 아래
//       [0, -1], // 왼쪽
//       [0, 1],  // 오른쪽
//   ];

//   // 방문 여부를 저장할 배열
//   const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
//   visited[0][0] = true; // 시작점 방문 처리

//   // BFS를 위한 큐 초기화: [행, 열, 거리]
//   const queue = [[0, 0, 1]];

//   while (queue.length > 0) {
//       const [currentRow, currentCol, distance] = queue.shift();

//       // 도착점에 도달하면 거리 반환
//       if (currentRow === rows - 1 && currentCol === cols - 1) {
//           return distance;
//       }

//       // 네 방향 탐색
//       for (const [dx, dy] of directions) {
//           const newRow = currentRow + dx;
//           const newCol = currentCol + dy;

//           // 맵 안에 있어야 하며, 벽(0)이 아니고, 방문하지 않은 칸이어야 함
//           if (
//               newRow >= 0 && newRow < rows &&
//               newCol >= 0 && newCol < cols &&
//               maps[newRow][newCol] === 1 &&
//               !visited[newRow][newCol]
//           ) {
//               visited[newRow][newCol] = true; // 방문 처리
//               queue.push([newRow, newCol, distance + 1]); // 다음 탐색 추가
//           }
//       }
//   }

//   // 도착점에 도달하지 못한 경우
//   return -1;
// }
