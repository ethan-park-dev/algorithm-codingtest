/**
 * 간단한 유니온-파인드 알고리즘 구현하기
 * 접답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/33.js
 *
 * 문제 설명
 *  상호배타적 집합을 표현하고 관리하는 데 다음 두 연산이 필요합니다.
 *   - union(x, y): x가 속한 집합과 y가 속한 집합을 합칩니다.
 *   - find(x): x가 속한 집합의 대표 원소를 찾습니다.
 *  operation라는 배열은 수행할 연산을 의미합니다. 연산 종류는 2개입니다.
 *   - ['u', 1, 2]는 노드 1과 노드2에 대해 union 연산 수행
 *   - ['f', 3] 노드 3의 루트 노드 찾기, find 연산 수행
 *  초기의 노드는 부모 노드를 자신의 값으로 설정했다고 가정하며, 여기서는 각 집합의 루트 노드를 기준으로
 *  루트 노드가 작은 노드를 더 큰 노드의 자식으로 연결하는 방법을 사용합니다.
 *  operations에 있는 연산을 모두 수행한 후 집합의 개수를 반환하는 solution() 함수를 구현해주세요.
 *
 * 제약 조건
 *  - 0 <= k <= 1,000: 노드의 개수
 *  - 1 <= operations.length <= 100,000: 연산의 개수
 *  - operations[i][0]은 문자열 'u' 또는 'f'입니다.
 *  - 'u'는 union 연산, union연산 뒤로는 두 개의 정수 x, y가 나옴
 *  - 'f'는 find 연산, find 연산 뒤로는 하나의 정수 x가 나옴
 *  - x와 y는 1 이상 k-1 이하의 정수
 *  - 연산은 항상 유효함
 *    - 즉 unionm find연산의 인수는 상호 배타적 집합 내에 있는 노드 번호
 *
 * 입출력 예
 * - k: 3, operations: [['u', 0, 1], ['u', 1, 2], ['f', 2]], return: 1
 * - k: 4, operations: [['u', 0, 1], ['u', 2, 3], ['f', 0]], return: 2
 */

export default function solution(k, operations) {
  // 처음에는 각 노드가 자기 자신을 부모로 가지도록 초기화
  const parents = Array.from({ length: k }, (_, index) => index);
  let count = k; // 집합의 개수를 저장할 변수, 처음에는 모든 노드가 서로 다른 집합에 있으므로 k개

  const unionFnc = (parents, x, y) => {
    const rootX = findFnc(parents, x);
    const rootY = findFnc(parents, y);

    parents[rootY] = rootX;
  };

  const findFnc = (parents, x) => {
    // 만약 x의 부모가 자기 자신이면, 즉 x가 루트 노드라면
    if (parents[x] === x) {
      return x;
    }

    // 그렇지 않다면 x의 부모를 찾아서 parents[x]에 저장
    // 그 부모 노드의 루트 노드를 찾아서 parents[x]에 저장
    // 이 부분이 경로 압축에 해당
    parents[x] = findFnc(parents, parents[x]);

    return parents[x];
  };

  for (const op of operations) {
    if (op[0] === 'u') {
      unionFnc(parents, op[1], op[2]);
    } else if (op[0] === 'f') {
      findFnc(parents, op[1]);
    }
  }

  // 모든 노드의 루트 노드를 찾아서 집합의 개수를 계산
  count = new Set(
    Array.from({ length: k }, (_, index) => findFnc(parents, index))
  ).size;

  return count;
}
