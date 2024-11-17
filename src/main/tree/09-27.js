/**
 * 이진 탐색 트리 구현
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/27.js
 *
 * 문제 설명
 *  첫번째 인수 list를 이용하여 이진 탐색 트리를 생성하고 두 번째 인수 searchList에 있는 각 노드를 이진 탐색 트리에서 찾을
 *  수 있는지 확인하여 true 또는 false를 담은 배열 result를 반환하는 함수 solution을 작성하세요
 *
 * 제약 조건
 * - list의 노드는 정수로 이루어져 있으며 1,000,000개를 초과하지 않습니다.
 * - 이진 탐색 트리의 삽입과 탐색 기능을 구현해야 합니다.
 * - searchList의 길이는 10이하입니다.
 *
 * 입출력 예
 * - list:[5, 3, 8, 4, 2, 1, 7, 10] searchList:[1, 2, 5, 6] answer:[true, true, true, false]
 * - list:[1, 3, 5, 7, 9] searchList:[2, 4, 6, 8, 10] answer:[false, false, false, false, false]
 */

// ➊ 노드 클래스 정의
class Node {
  // ➋ 노드 클래스 생성자
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

// ➌ 이진 탐색 트리 클래스
class BST {
  // ➍ 초기에 아무 노드도 없는 상태
  constructor() {
    this.root = null;
  }

  // ➎ 루트 노드부터 시작해서 이진 탐색 트리 규칙에 맞는 위치에 새 노드 삽입
  insert(key) {
    // 루트 노드가 없는 경우 새로운 노드를 루트 노드로 추가
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let curr = this.root;
      while (true) {
        // 삽입하려는 값이 현재 노드의 값보다 작은 경우 왼쪽 자식 노드로 이동
        if (key < curr.val) {
          if (curr.left) {
            curr = curr.left;
          } else {
            // 현재 노드의 왼쪽 자식 노드가 없는 경우 새로운 노드 추가
            curr.left = new Node(key);
            break;
          }
        } else {
          // 삽입하려는 값이 현재 노드의 값보다 큰 경우 오른쪽 자식 노드로 이동
          if (curr.right) {
            curr = curr.right;
          } else {
            // 현재 노드의 오른쪽 자식 노드가 없는 경우 새로운 노드 추가
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  // ➏ 이진 탐색 규칙에 따라 특정값이 있는지 확인(루트 노드부터 시작)
  search(key) {
    let curr = this.root;
    // 현재 노드가 존재하고, 찾으려는 값과 현재 노드의 값이 같지 않은 경우 반복
    while (curr && curr.val !== key) {
      // 찾으려는 값이 현재 노드의 값보다 작은 경우 왼쪽 자식 노드로 이동
      if (key < curr.val) {
        curr = curr.left;
      } else {
        // 찾으려는 값이 현재 노드의 값보다 큰 경우 오른쪽 자식 노드로 이동
        curr = curr.right;
      }
    }
    return curr;
  }
}

// ➐ list에 있는 데이터를 활용해서 이진 탐색 트리 생성, searchList 원소 탐색
export default function solution(list, searchList) {
  const bst = new BST();
  // 리스트의 각 요소를 이용하여 이진 탐색 트리 생성
  for (const key of list) {
    bst.insert(key);
  }
  const result = [];
  // 검색 리스트의 각 요소를 이진 탐색 트리에서 검색하고, 검색 결과를 리스트에 추가
  for (const searchVal of searchList) {
    if (bst.search(searchVal)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
