/**
 * 깊이 우선 탐색 순회
 *
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/38.js
 *
 * 문제 설명
 *  깊이 우선 탐색으로 모든 그래프의 노드를 순회하는 함수 solution()을 작성하세요. 시작 노드는
 *  start로 주어집니다. graph는 [출발 노드, 도착 노드]쌍들이 들어 있는 배열입니다.
 *  반환값은 그래프의 시작 노드부터 모든 노드를 깊이 우선 탐색으로 진행한 순서대로 노드가 저장된 리스트입니다.
 *
 * 제한 조건
 * - 노드의 최대 개수는 100개를 넘지 않습니다.
 * - 시작 노드부터 시작해서 모든 노드를 방문할 수 있는 경로가 항상 있습니다.
 * - 그래프의 노드는 문자열입니다.
 *
 * 입출력 예
 * - graph: [['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']], start: 'A', return: ['A', 'B', 'C', 'D', 'E']
 * - graph: [['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']], start: 'A', return: ['A', 'B', 'D', 'E', 'F', 'C']
 */

// export default function solution(graph, start) {
//   // 인접 리스트 생성
//   const adjList = {};

//   graph.forEach(([from, to]) => {
//     if (!adjList[from]) {
//       adjList[from] = [];
//     }
//     adjList[from].push(to);
//   });

//   // 방문 순서를 저장할 배열과 방문 체크를 위한 Set 정의
//   const result = [];
//   const visitedSet = new Set();

//   // DFS 함수 정의
//   const dfs = (node) => {
//     if (visitedSet.has(node)) return;

//     visitedSet.add(node);
//     result.push(node);

//     // 연결된 노드들을 알파벳 순으로 방문
//     if (adjList[node]) {
//       for (const neighbor of adjList[node]) {
//         dfs(neighbor);
//       }
//     }
//   };

//   dfs(start);

//   return result;
// }

// 미로 배열 설정
// const maze = [
//   ['S', 1, 0, 0, 0],
//   [0, 1, 1, 1, 0],
//   [0, 0, 0, 1, 0],
//   [0, 1, 1, 1, 0],
//   [0, 0, 0, 'E', 0],
// ];

// // 미로의 크기
// const rows = maze.length;
// const cols = maze[0].length;

// // 방문 여부를 저장하는 2차원 배열
// const visited = Array.from(Array(rows), () => Array(cols).fill(false));

// // 방향 벡터 (상, 하, 좌, 우)
// const directions = [
//   [-1, 0], // 상
//   [1, 0], // 하
//   [0, -1], // 좌
//   [0, 1], // 우
// ];

// // 시작 지점 찾기
// let startRow, startCol;
// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < cols; j++) {
//     if (maze[i][j] === 'S') {
//       startRow = i;
//       startCol = j;
//       break;
//     }
//   }
// }

// // 경로 저장을 위한 배열
// let path = [];

// // DFS 함수 구현
// function dfs(row, col) {
//   // 범위를 벗어나면 종료
//   if (row < 0 || col < 0 || row >= rows || col >= cols) {
//     return false;
//   }

//   // 벽이거나 이미 방문한 경우 종료
//   if (maze[row][col] === 0 || visited[row][col]) {
//     return false;
//   }

//   // 방문 표시
//   visited[row][col] = true;
//   path.push([row, col]);

//   // 도착 지점인지 확인
//   if (maze[row][col] === 'E') {
//     return true;
//   }

//   // 네 방향으로 탐색
//   for (let [dx, dy] of directions) {
//     const newRow = row + dx;
//     const newCol = col + dy;
//     if (dfs(newRow, newCol)) {
//       return true;
//     }
//   }

//   // 백트래킹: 경로에서 제거하고 방문 표시 해제
//   path.pop();
//   visited[row][col] = false;
//   return false;
// }

// // DFS 탐색 실행
// if (dfs(startRow, startCol)) {
//   console.log('출구까지의 경로를 찾았습니다:');
//   console.log(path);
// } else {
//   console.log('출구까지의 경로를 찾을 수 없습니다.');
// }

// 미로 배열 설정
const maze = [
  ['S', 1, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 'E', 0],
];

const rows = maze.length;
const cols = maze[0].length;
const visited = Array.from(Array(rows), () => Array(cols).fill(false));
const directions = [
  [-1, 0], // 상
  [1, 0], // 하
  [0, -1], // 좌
  [0, 1], // 우
];

let startRow, startCol;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    if (maze[i][j] === 'S') {
      startRow = i;
      startCol = j;
      break;
    }
  }
}

// 최단 경로 길이와 경로 수를 저장하는 변수
let minPathLength = Infinity;
let shortestPathCount = 0;

function dfs(row, col, currentLength) {
  // 범위를 벗어나면 종료
  if (row < 0 || col < 0 || row >= rows || col >= cols) {
    return;
  }

  // 벽이거나 이미 방문한 경우 종료
  if (maze[row][col] === 0 || visited[row][col]) {
    return;
  }

  // 가지 치기: 현재 경로 길이가 이미 최소 경로 길이보다 크면 종료
  if (currentLength > minPathLength) {
    return;
  }

  // 도착 지점에 도달한 경우
  if (maze[row][col] === 'E') {
    if (currentLength < minPathLength) {
      minPathLength = currentLength;
      shortestPathCount = 1;
    } else if (currentLength === minPathLength) {
      shortestPathCount++;
    }
    return;
  }

  // 방문 표시
  visited[row][col] = true;

  // 네 방향으로 탐색
  for (let [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;
    dfs(newRow, newCol, currentLength + 1);
  }

  // 백트래킹: 방문 표시 해제
  visited[row][col] = false;
}

// DFS 탐색 실행
dfs(startRow, startCol, 0);

if (shortestPathCount > 0) {
  console.log(`최단 경로의 길이: ${minPathLength}`);
  console.log(`최단 경로의 수: ${shortestPathCount}`);
} else {
  console.log('출구까지의 경로를 찾을 수 없습니다.');
}
