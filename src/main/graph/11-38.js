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

export default function solution(graph, start) {
  // 인접 리스트 생성
  const adjList = {};

  graph.forEach(([from, to]) => {
    if (!adjList[from]) {
      adjList[from] = [];
    }
    adjList[from].push(to);
  });

  // 방문 순서를 저장할 배열과 방문 체크를 위한 Set 정의
  const result = [];
  const visitedSet = new Set();

  // DFS 함수 정의
  const dfs = (node) => {
    if (visitedSet.has(node)) return;

    visitedSet.add(node);
    result.push(node);

    // 연결된 노드들을 알파벳 순으로 방문
    if (adjList[node]) {
      for (const neighbor of adjList[node]) {
        dfs(neighbor);
      }
    }
  };

  dfs(start);

  return result;
}
