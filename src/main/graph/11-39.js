/**
 * 너비 우선 탐색 순회
 *
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/39.js
 *
 * 문제 설명
 *  너비 우선 탐색으로 모든 노드를 순회하는 함수 solution()을 작성하세요. 시작 노드는 start로 주어집니다.
 *  graph는 [출발 노드, 도착 노드]쌍들이 들어 있는 배열입니다. 반환값은 그래프의 시작 노드부터 모든 노드를
 *  우선 탐색으로 진행한 순서대로 노드가 저장된 배열입니다.
 *
 * 제약 조건
 * - 노드의 최대 개수는 100개입니다.
 * - 시작 노드부터 시작해서 모든 노드를 방문할 수 있는 경로가 항상 있습니다.
 * - 그래프의 노드는 숫자입니다.
 *
 * 입출력 예
 * - graph: [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7], [4, 8], [5, 8], [6, 9], [7, 9]]], start: 1, return: [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * - graph: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]], start: 1, return: [1, 2, 3, 4, 5, 0]
 */

export default function solution(graph, start) {
  // 인접 리스트 생성
  const adjList = {};

  // 단방향으로 인접 리스트 초기화
  graph.forEach(([from, to]) => {
    if (!adjList[from]) adjList[from] = [];
    adjList[from].push(to); // 단방향: from -> to만 추가
  });

  // 방문 순서를 저장할 배열과 방문 체크를 위한 Set 정의
  const result = [];
  const visitedSet = new Set();

  // 큐 초기화
  const queue = [start];
  visitedSet.add(start);

  // BFS 탐색
  while (queue.length > 0) {
    const node = queue.shift(); // 큐에서 노드 꺼내기
    result.push(node); // 현재 노드 방문 처리

    // 연결된 노드 탐색
    if (adjList[node]) {
      adjList[node].sort(); // 노드 방문 순서를 일정하게 하기 위해 정렬
      for (const neighbor of adjList[node]) {
        if (!visitedSet.has(neighbor)) {
          queue.push(neighbor); // 큐에 추가
          visitedSet.add(neighbor); // 방문 처리
        }
      }
    }
  }

  return result;
}
