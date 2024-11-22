/**
 * 벨만 포드 알고리즘
 *
 * 접답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/41.js
 *
 * 문제 설명
 *  벨만-포드 알고리즘을 구현한 solution() 함수를 작성하세요. graph의 각 데이터는 배열입니다.
 *  첫 번쨰 데이터는 0번 노드 기준으로 연결된 노드 정보, 두 번째 데이터는 1번 노드 기준으로
 *  연결된 노드 정보입니다. 노드 정보의 구성은 (노드, 가중치)와 같습니다. source는 시작 노드입니다.
 *  반환값은 최단 거리를 담은 distance 배열과 최단 거리와 함께 관리할 직전 노드 predecessor를
 *  배열에 차례대로 담아서 [distance, predecessor] 형태로 반환합니다. predecessor에서 시작
 *  노드는 null로 표시 합니다. 만약 음의 가중치 순회가 있다면 [-1]을 반환하세요. 음의 가중치 순회란 순환
 *  하면 할수록 가중치의 합이 적어지는 순회를 말합니다.
 *
 * 제약 조건
 * - 노드의 최대 개수는 100개입니다.
 * - 각 간선의 가중치는 -100 이상 100 이하입니다.
 *
 * 입출력 예
 * - graph: [[[1, 4], [2, 3], [4, -6 ]], [[3, 5]], [[1, 2]], [[0, 7], [2, 4]], [[2, 2]]], source: 0, return: [[0, -2, -4, 3, -6], [null, 2, 4, 1, 0]]
 * - graph: [[[1, 5], [2, -1]], [[2, 2]], [[3, -2]], [[0, 2], [1, 6]]], source: 0, return: [-1]
 */

export default function solution(graph, source) {
  // ➊ 그래프의 노드 수
  const numVertices = graph.length;

  // ➋ 거리 배열 초기화
  const distance = Array(numVertices).fill(Infinity);
  distance[source] = 0;

  // ➌ 직전 경로 배열 초기화
  const predecessor = Array(numVertices).fill(null);

  // ➍ 간선 수 만큼 반복하여 최단 경로 갱신
  for (let temp = 0; temp < numVertices - 1; temp++) {
    for (let u = 0; u < numVertices; u++) {
      for (const [v, weight] of graph[u]) {
        // ➎ 현재 노드 u를 거쳐서 노드 v로 가는 경로의 거리가 기존에 저장된 노드 v까지의 거리보다 짧은 경우
        if (distance[u] + weight < distance[v]) {
          // ➏ 최단 거리를 갱신해줍니다.
          distance[v] = distance[u] + weight;
          // ➐ 직전 경로를 업데이트합니다.
          predecessor[v] = u;
        }
      }
    }
  }

  // ➑ 음의 가중치 순회 체크
  for (let u = 0; u < numVertices; u++) {
    for (const [v, weight] of graph[u]) {
      // ➒ 현재 노드 u를 거쳐서 노드 v로 가는 경로의 거리가 기존에 저장된 노드 v까지의 거리보다 짧은 경우
      if (distance[u] + weight < distance[v]) {
        // ❿ 음의 가중치 순회가 발견되었으므로 [-1]을 반환합니다.
        return [-1];
      }
    }
  }

  return [distance, predecessor];
}
